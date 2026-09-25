"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { z, type ZodTypeAny } from "zod";
import { useChatUi } from "./context";

export const BuiltinActionType = {
  ContinueConversation: "continue_conversation",
  OpenUrl: "open_url",
} as const;

export type ComponentGroup = { name: string; components: string[]; notes?: string[] };

export type JsonComponentDefinition<TSchema extends ZodTypeAny = ZodTypeAny> = {
  name: string;
  props: TSchema;
  schema: TSchema;
  description?: string;
  ref: z.ZodType<{ type?: string; props: z.infer<TSchema> }>;
  component: (context: {
    props: z.infer<TSchema>;
    renderNode: (node: unknown) => ReactNode;
  }) => ReactNode;
};

export function defineComponent<TSchema extends ZodTypeAny>(config: {
  name: string;
  props: TSchema;
  description?: string;
  component: JsonComponentDefinition<TSchema>["component"];
}): JsonComponentDefinition<TSchema> {
  return {
    ...config,
    schema: config.props,
    ref: z.preprocess(
      (value) => {
        if (!value || typeof value !== "object" || Array.isArray(value)) return value;
        const record = value as Record<string, unknown>;
        if (typeof record.type === "string") {
          return {
            ...record,
            props: record.props && typeof record.props === "object" ? record.props : {},
          };
        }
        return "props" in record ? record : { type: config.name, props: record };
      },
      z.custom<{ type?: string; props: z.infer<TSchema> }>(
        (value) => Boolean(value && typeof value === "object" && "props" in value),
      ),
    ) as z.ZodType<{ type?: string; props: z.infer<TSchema> }>,
  };
}

export function createLibrary<T extends JsonComponentDefinition>(config: {
  root: string;
  componentGroups?: ComponentGroup[];
  components: T[];
}) {
  return {
    ...config,
    registry: Object.fromEntries(config.components.map((component) => [component.name, component])),
  };
}

type Rule = { type: string; value?: string | number | boolean };
type FormValidation = {
  errors: Record<string, string>;
  registerField: (name: string, rules: Rule[], getValue: () => unknown) => void;
  unregisterField: (name: string) => void;
  validateField: (name: string, value: unknown, rules: Rule[]) => boolean;
  validateForm: () => boolean;
};

export const FormNameContext = createContext("form");
export const FormValidationContext = createContext<FormValidation | null>(null);

type FieldStore = {
  values: Record<string, unknown>;
  setValue: (form: string, field: string, value: unknown) => void;
};

const FieldContext = createContext<FieldStore | null>(null);

export function JsonComponentProvider({ children }: { children: ReactNode }) {
  const [values, setValues] = useState<Record<string, unknown>>({});
  const value = useMemo<FieldStore>(() => ({
    values,
    setValue: (form, field, fieldValue) => setValues((current) => ({ ...current, [`${form}.${field}`]: fieldValue })),
  }), [values]);
  return <FieldContext.Provider value={value}>{children}</FieldContext.Provider>;
}

function validateValue(value: unknown, rules: Rule[]) {
  for (const rule of rules) {
    const text = String(value ?? "");
    if (rule.type === "required" && rule.value && !text.trim()) return "This field is required";
    if (rule.type === "email" && rule.value && text && !/^\S+@\S+\.\S+$/.test(text)) return "Enter a valid email";
    if (rule.type === "url" && rule.value && text) { try { new URL(text); } catch { return "Enter a valid URL"; } }
    if (rule.type === "minLength" && text.length < Number(rule.value)) return `Use at least ${rule.value} characters`;
    if (rule.type === "maxLength" && text.length > Number(rule.value)) return `Use no more than ${rule.value} characters`;
    if (rule.type === "min" && Number(value) < Number(rule.value)) return `Value must be at least ${rule.value}`;
    if (rule.type === "max" && Number(value) > Number(rule.value)) return `Value must be at most ${rule.value}`;
  }
  return "";
}

export function useCreateFormValidation(): FormValidation {
  const [, refresh] = useState(0);
  const errors = useRef<Record<string, string>>({});
  const fields = useRef(new Map<string, { rules: Rule[]; getValue: () => unknown }>());
  return useMemo(() => ({
    errors: errors.current,
    registerField: (name, rules, getValue) => fields.current.set(name, { rules, getValue }),
    unregisterField: (name) => { fields.current.delete(name); delete errors.current[name]; },
    validateField: (name, value, rules) => { const error = validateValue(value, rules); if (error) errors.current[name] = error; else delete errors.current[name]; refresh((value) => value + 1); return !error; },
    validateForm: () => { let valid = true; fields.current.forEach((field, name) => { const error = validateValue(field.getValue(), field.rules); if (error) { errors.current[name] = error; valid = false; } else delete errors.current[name]; }); refresh((value) => value + 1); return valid; },
  }), []);
}

export function useFormValidation() { return useContext(FormValidationContext); }
export function useFormName() { return useContext(FormNameContext); }
export function useIsStreaming() { return useChatUi().actionsLocked; }
export function useGetFieldValue() {
  const store = useContext(FieldContext);
  return (form: string, field: string) => store?.values[`${form}.${field}`];
}
export function useSetFieldValue() {
  const store = useContext(FieldContext);
  return (form: string, _component: string, field: string, value: unknown, save?: boolean) => {
    void save;
    store?.setValue(form, field, value);
  };
}
export function useSetDefaultValue({ formName, name, existingValue, defaultValue }: { formName: string; componentType: string; name: string; existingValue: unknown; defaultValue: unknown; shouldTriggerSaveCallback?: boolean }) {
  const store = useContext(FieldContext);
  useEffect(() => {
    if (existingValue === undefined) store?.setValue(formName, name, defaultValue);
  }, [defaultValue, existingValue, formName, name, store]);
}
export function useTriggerAction() {
  const { onAction } = useChatUi();
  return (label: string, _formName?: string, action?: { type?: string; params?: Record<string, unknown>; url?: string }) => {
    const url = action?.url ?? (typeof action?.params?.url === "string" ? action.params.url : undefined);
    onAction({ type: action?.type, message: label, params: action?.params, url }, label);
  };
}

export function parseStructuredRules(input: unknown): Rule[] {
  if (!input || typeof input !== "object") return [];
  return Object.entries(input as Record<string, unknown>)
    .filter(([, value]) => value !== undefined && value !== false)
    .map(([type, value]) => ({ type, value: value as string | number | boolean }));
}


