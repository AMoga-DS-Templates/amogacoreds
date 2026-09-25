"use client";

/* JSON definitions are rendered as isolated React components by ShadcnChatRenderer. */
 

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  BuiltinActionType,
  defineComponent,
  useIsStreaming,
  useTriggerAction,
} from "../json-component";
import {
  Archive,
  ChartColumn,
  MapPin,
  MessageCircle,
  MoreVertical,
  Pencil,
  Plus,
  ShoppingCart,
  Trash2,
} from "lucide-react";
import { z } from "zod";
import { actionSchema, type ActionSchema } from "../action";

const ProductCardSchema = z.object({
  name: z.string(),
  imageSrc: z.string().optional().default(""),
  price: z.string(),
  regularPrice: z.string().optional().default(""),
  description: z.string().optional().default(""),
  stockQuantity: z.string().optional().default(""),
  stockStatus: z.string().optional().default(""),
  addLabel: z.string().optional().default("Add"),
  action: actionSchema.optional(),
});

type ProductCardProps = z.infer<typeof ProductCardSchema>;

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, "").trim();

function ProductCardView({ props }: { props: ProductCardProps }) {
  const triggerAction = useTriggerAction();
  const isStreaming = useIsStreaming();
  const action = props.action as ActionSchema | undefined;
  const description = stripHtml(props.description ?? "");
  const hasRegularPrice = Boolean(props.regularPrice);
  const runProductAction = (label: string, context: string) => {
    triggerAction(label, undefined, {
      type: BuiltinActionType.ContinueConversation,
      params: { context },
    });
  };

  return (
    <Card className="w-full max-w-[800px] rounded-2xl border p-0 shadow-none">
      <CardContent className="flex min-h-[140px] flex-col gap-4 p-4 sm:flex-row sm:items-start">
        <div className="flex h-32 w-full shrink-0 items-center justify-center overflow-hidden rounded-lg bg-muted/30 sm:w-32">
          {props.imageSrc ? (
            // Product images come from commerce APIs; keep the raw URL behavior consistent with the POS page.
            <img
              src={props.imageSrc}
              alt={props.name}
              className="h-full w-full object-contain"
            />
          ) : (
            <span className="text-xs text-muted-foreground">No Image</span>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
          <div className="min-w-0">
            <div className="truncate text-base font-medium text-foreground" title={props.name}>
              {props.name}
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {hasRegularPrice ? (
                <span className="text-sm text-muted-foreground line-through">
                  {props.regularPrice}
                </span>
              ) : null}
              <span className="text-lg font-bold text-foreground">{props.price}</span>
            </div>
            {description ? (
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{description}</p>
            ) : null}
            {props.stockQuantity || props.stockStatus ? (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {props.stockQuantity ? (
                  <span className="rounded border bg-muted px-3 py-1 text-xs font-medium">
                    {props.stockQuantity}
                  </span>
                ) : null}
                {props.stockStatus ? (
                  <span
                    className={cn(
                      "rounded border px-3 py-1 text-xs capitalize",
                      props.stockStatus.toLowerCase().includes("out")
                        ? "border-red-200 text-red-700 dark:border-red-900 dark:text-red-400"
                        : "text-muted-foreground",
                    )}
                  >
                    {props.stockStatus}
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="flex items-center justify-end gap-2">
            <Button
              aria-label={props.addLabel}
              className="rounded-lg"
              disabled={isStreaming}
              size="icon"
              variant="default"
              onClick={() => {
                const actionType = action?.type ?? BuiltinActionType.ContinueConversation;
                const actionParams =
                  action?.type === BuiltinActionType.OpenUrl
                    ? { url: (action as { url: string }).url }
                    : (action as { params?: Record<string, unknown> })?.params;

                triggerAction(props.addLabel, undefined, {
                  type: actionType,
                  params: actionParams,
                });
              }}
            >
              <Plus className="h-4 w-4" />
            </Button>
            <Button
              aria-label="View location"
              className="rounded-lg"
              disabled={isStreaming}
              size="icon"
              variant="ghost"
              onClick={() => runProductAction("Location", `Show location details for ${props.name}`)}
            >
              <MapPin className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  aria-label="More product actions"
                  className="rounded-lg"
                  disabled={isStreaming}
                  size="icon"
                  variant="ghost"
                >
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  onClick={() => runProductAction("Chat", `Chat about product ${props.name}`)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => runProductAction("Chart", `Show chart for product ${props.name}`)}
                >
                  <ChartColumn className="mr-2 h-4 w-4" /> Chart
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => runProductAction("Orders", `Show orders for product ${props.name}`)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Orders
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => runProductAction("Edit", `Edit product ${props.name}`)}
                >
                  <Pencil className="mr-2 h-4 w-4" /> Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => runProductAction("Archive", `Archive product ${props.name}`)}
                >
                  <Archive className="mr-2 h-4 w-4" /> Archive
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="text-red-500 focus:text-red-500"
                  onClick={() => runProductAction("Delete", `Delete product ${props.name}`)}
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export const ProductCard = defineComponent({
  name: "ProductCard",
  props: ProductCardSchema,
  description:
    "POS-style product card with product image, price, stock labels, and add button. Use real product data only.",
  component: ({ props }) => <ProductCardView props={props} />,
});

export default ProductCard;


