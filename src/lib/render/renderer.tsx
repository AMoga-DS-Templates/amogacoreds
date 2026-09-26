"use client";

import { useRef, useMemo, type ReactNode } from "react";
import { toast } from "sonner";
import {
  Renderer,
  type Spec,
  StateProvider,
  VisibilityProvider,
  ActionProvider,
  ValidationProvider,
  useValidation,
} from "@json-render/react";
import { JsonRenderDevtools } from "@json-render/devtools-react";
import type { Catalog } from "@json-render/core";

import { registry, Fallback } from "./registry";
import { playgroundCatalog } from "./catalog";

// =============================================================================
// PlaygroundRenderer
// =============================================================================

interface PlaygroundRendererProps {
  spec: Spec | null;
  data?: Record<string, unknown>;
  loading?: boolean;
  /** Show the json-render devtools panel. Default: false. */
  devtools?: boolean;
}

const fallbackRenderer = (renderProps: { element: { type: string } }) => (
  <Fallback type={renderProps.element.type} />
);

/**
 * Recover tab panels that an AI placed in `elements` but forgot to attach to
 * the Tabs element's children. The visibility expressions still identify the
 * correct tab, so these panels can be safely attached before rendering.
 */
function normalizeSpec(spec: Spec): Spec {
  const source = spec as any;
  const elements = source.elements as Record<string, any> | undefined;
  if (!elements) return spec;

  let changed = false;
  const normalizedElements = { ...elements };

  for (const [id, element] of Object.entries(elements)) {
    if (element?.type !== "Tabs" || element.children?.length) continue;

    const tabs = element.props?.tabs;
    if (!Array.isArray(tabs) || !tabs.length) continue;

    const panelIds = tabs.flatMap((tab: any) =>
      Object.entries(elements)
        .filter(([childId, child]: [string, any]) => {
          if (childId === id || !child?.visible) return false;
          return child.visible.eq === tab.value;
        })
        .map(([childId]) => childId),
    );

    if (panelIds.length) {
      normalizedElements[id] = { ...element, children: panelIds };
      changed = true;
    }
  }

  return changed ? ({ ...source, elements: normalizedElements } as Spec) : spec;
}

/**
 * Inner component that sits inside ValidationProvider so it can call
 * useValidation() and wire validateAll into the formSubmit action handler.
 *
 * ActionProvider stores `handlers` in useState, so it only reads the initial
 * value. We use a ref so the handlers object is stable (created once) but
 * formSubmit always reads the latest validateAll.
 */
function ValidatedActions({ children }: { children: ReactNode }) {
  const { validateAll } = useValidation();
  const validateAllRef = useRef(validateAll);
  validateAllRef.current = validateAll;

  const handlers = useMemo<
    Record<string, (params: Record<string, unknown>) => void>
  >(
    () => ({
      buttonClick: (params) => {
        const message = (params?.message as string) || "Button clicked!";
        toast.success(message);
      },
      formSubmit: () => {
        const allValid = validateAllRef.current();
        if (!allValid) {
          toast.error("Please fix the errors before submitting.");
          return;
        }
        toast.success("Form submitted successfully!");
      },
      linkClick: (params) => {
        const href = (params?.href as string) || "#";
        toast.info(`Navigating to: ${href}`);
      },
    }),
    [], // stable — ref ensures latest validateAll is always used
  );

  return <ActionProvider handlers={handlers}>{children}</ActionProvider>;
}

export function PlaygroundRenderer({
  spec,
  data,
  loading,
  devtools,
}: PlaygroundRendererProps): ReactNode {
  if (!spec) return null;

  const normalizedSpec = normalizeSpec(spec);

  return (
    <StateProvider initialState={data ?? normalizedSpec.state}>
      <VisibilityProvider>
        <ValidationProvider>
          <ValidatedActions>
            <Renderer
              spec={normalizedSpec}
              registry={registry}
              fallback={fallbackRenderer}
              loading={loading}
            />
            {devtools ? (
              <JsonRenderDevtools
                spec={normalizedSpec}
                catalog={playgroundCatalog as unknown as Catalog}
              />
            ) : null}
          </ValidatedActions>
        </ValidationProvider>
      </VisibilityProvider>
    </StateProvider>
  );
}
