// Scripted data from the official shadcn example; used only by the Design System.
import type { UIDataTypes, UIMessage } from "ai";
import { createChat } from "@shadcn/helpers/ai-sdk";

export type Source = {
  url: string;
  title: string;
  description: string;
};

export const sources = {
  streaming: {
    url: "https://nextjs.org/docs/app/getting-started/linking-and-navigating#streaming",
    title: "Linking and Navigating",
    description: "How the App Router streams a route to the browser.",
  },
  suspense: {
    url: "https://react.dev/reference/react/Suspense",
    title: "<Suspense>",
    description: "Display a fallback until its children have finished loading.",
  },
  serverComponents: {
    url: "https://react.dev/reference/rsc/server-components",
    title: "Server Components",
    description: "Components that render ahead of time, on the server.",
  },
  loading: {
    url: "https://nextjs.org/docs/app/api-reference/file-conventions/loading",
    title: "loading.js",
    description: "Show an instant loading state for a route segment.",
  },
  chunked: {
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Transfer-Encoding",
    title: "Transfer-Encoding",
    description: "Send a response as a series of chunks.",
  },
} satisfies Record<string, Source>;

export const paragraphs: Array<Array<string | Source>> = [
  [
    "Next.js streams a route in chunks, so the page shows up before every request finishes. ",
    sources.streaming,
  ],
  [
    "Wrap a slow part of the page in a Suspense boundary and React sends the fallback first. When the data resolves, the finished HTML streams into the same response and replaces the fallback, with no extra request from the browser. ",
    sources.suspense,
    " Server Components help here, because their code never ships to the browser. ",
    sources.serverComponents,
  ],
  [
    "A loading.tsx file does the same for a whole route segment. ",
    sources.loading,
    " It all runs over chunked transfer encoding, so there is nothing extra to set up. ",
    sources.chunked,
  ],
];
