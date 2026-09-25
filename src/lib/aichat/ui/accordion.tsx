"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Accordion as ShadcnAccordion,
} from "@/components/ui/accordion";
import { defineComponent } from "../json-component";
import { z } from "zod";
import { ContentChildUnion } from "../unions";
import { getJsonProps } from "../helpers";

const AccordionItemSchema = z.object({
  value: z.string(),
  trigger: z.string(),
  content: z.array(ContentChildUnion),
});

export const AccordionItemDef = defineComponent({
  name: "AccordionItem",
  props: AccordionItemSchema,
  description: "Collapsible item inside Accordion. value: unique id, trigger: header text.",
  component: () => null,
});

const AccordionSchema = z.object({
  items: z.array(AccordionItemDef.ref),
  type: z.enum(["single", "multiple"]).optional(),
});

export const Accordion = defineComponent({
  name: "Accordion",
  props: AccordionSchema,
  description: 'Collapsible sections. type: "single" | "multiple". items: AccordionItem[].',
  component: ({ props, renderNode }) => {
     
    const items = ((props.items ?? []) as unknown[])
      .map(getJsonProps)
      .filter((item): item is Record<string, unknown> => item !== null);
    const type = props.type ?? "multiple";

    if (type === "single") {
      return (
        <ShadcnAccordion type="single" collapsible>
          {items.map((item, i) => (
            <AccordionItem key={i} value={String(item.value ?? i)}>
              <AccordionTrigger>{String(item.trigger ?? "")}</AccordionTrigger>
              <AccordionContent>{renderNode(item.content)}</AccordionContent>
            </AccordionItem>
          ))}
        </ShadcnAccordion>
      );
    }

    return (
      <ShadcnAccordion type="multiple">
        {items.map((item, i) => (
          <AccordionItem key={i} value={String(item.value ?? i)}>
            <AccordionTrigger>{String(item.trigger ?? "")}</AccordionTrigger>
            <AccordionContent>{renderNode(item.content)}</AccordionContent>
          </AccordionItem>
        ))}
      </ShadcnAccordion>
    );
  },
});


