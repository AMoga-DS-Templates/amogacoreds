"use client";
import * as React from "react";
import { useChat } from "@ai-sdk/react";
import { lastAssistantMessageIsCompleteWithApprovalResponses } from "ai";
import {
  AiChainOfThought,
  AiChat,
  AiCheckpoint,
  AiConfirmation,
  AiContext,
  AiFileTree,
  AiInlineCitation,
  AiMessage,
  AiModelSelector,
  AiPlan,
  AiPromptInput,
  AiQueue,
  AiReasoning,
  AiSources,
  AiStackTrace,
  AiSubagent,
  AiSuggestion,
  AiTask,
  AiTerminal,
  AiTestResults,
  AiTool,
} from "@/components/ai-category";
import { getMessageText } from "@/components/ai-category/support/helpers";

import * as AiChainOfThoughtFixture from "../../mocks/ai-elements/chain-of-thought";
export function AiChainOfThoughtPreview() {
  const fixture = AiChainOfThoughtFixture;
  const state = useChat<AiChainOfThoughtFixture.ChatMessage>({
    messages: fixture.transcript,
    transport: fixture.transport,
  });
  return (
    <AiChainOfThought
      messages={state.messages}
      status={state.status}
      onReplay={() => {
        state.setMessages([]);
        void state.sendMessage(fixture.question);
      }}
    />
  );
}

import * as AiChatFixture from "../../mocks/ai-elements/chat";
export function AiChatPreview() {
  const fixture = AiChatFixture;
  const state = useChat<AiChatFixture.ChatMessage>({
    messages: fixture.initialMessages,
    transport: fixture.transport,
  });
  return (
    <AiChat
      messages={state.messages}
      status={state.status}
      nextPrompt={
        fixture.chat.next(state.messages)
          ? getMessageText(fixture.chat.next(state.messages)!)
          : ""
      }
      onSend={(text) => {
        void state.sendMessage({ text });
      }}
      onReset={() => state.setMessages(fixture.initialMessages)}
    />
  );
}

import * as AiCheckpointFixture from "../../mocks/ai-elements/checkpoint";
export function AiCheckpointPreview() {
  const fixture = AiCheckpointFixture;
  const state = useChat<AiCheckpointFixture.ChatMessage>({
    messages: fixture.transcript,
    transport: fixture.transport,
  });
  return (
    <AiCheckpoint
      messages={state.messages}
      status={state.status}
      onRestore={(id) => {
        const i = state.messages.findIndex((m) => m.id === id);
        if (i >= 0) state.setMessages(state.messages.slice(0, i + 1));
      }}
      onContinue={
        fixture.chat.next(state.messages)
          ? () => {
              void state.sendMessage(fixture.chat.next(state.messages)!);
            }
          : undefined
      }
    />
  );
}

import * as AiConfirmationFixture from "../../mocks/ai-elements/confirmation";
export function AiConfirmationPreview() {
  const fixture = AiConfirmationFixture;
  const state = useChat<AiConfirmationFixture.ChatMessage>({
    messages: fixture.initialMessages,
    transport: fixture.transport,
    sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithApprovalResponses,
  });
  return (
    <AiConfirmation
      messages={state.messages}
      status={state.status}
      onApprovalResponse={(response) => {
        void state.addToolApprovalResponse(response);
      }}
      onContinue={
        fixture.chat.next(state.messages)
          ? () => {
              void state.sendMessage(fixture.chat.next(state.messages)!);
            }
          : undefined
      }
      onReset={() => state.setMessages(fixture.initialMessages)}
    />
  );
}

import * as AiPlanFixture from "../../mocks/ai-elements/plan";
export function AiPlanPreview() {
  const fixture = AiPlanFixture;
  const state = useChat<AiPlanFixture.ChatMessage>({
    messages: fixture.transcript,
    transport: fixture.transport,
  });
  return (
    <AiPlan
      messages={state.messages}
      status={state.status}
      onReplay={() => {
        state.setMessages([]);
        void state.sendMessage(fixture.question);
      }}
    />
  );
}

import * as AiQueueFixture from "../../mocks/ai-elements/queue";
export function AiQueuePreview() {
  const fixture = AiQueueFixture;
  const state = useChat<AiQueueFixture.ChatMessage>({
    messages: fixture.transcript,
    transport: fixture.transport,
  });
  return (
    <AiQueue
      messages={state.messages}
      status={state.status}
      onReplay={() => {
        state.setMessages([]);
        void state.sendMessage(fixture.question);
      }}
    />
  );
}

import * as AiReasoningFixture from "../../mocks/ai-elements/reasoning";
export function AiReasoningPreview() {
  const fixture = AiReasoningFixture;
  const state = useChat({
    messages: fixture.transcript,
    transport: fixture.transport,
  });
  return (
    <AiReasoning
      messages={state.messages}
      status={state.status}
      onReplay={() => {
        state.setMessages([]);
        void state.sendMessage(fixture.question);
      }}
    />
  );
}

import * as AiSourcesFixture from "../../mocks/ai-elements/sources";
export function AiSourcesPreview() {
  const fixture = AiSourcesFixture;
  const state = useChat({
    messages: fixture.transcript,
    transport: fixture.transport,
  });
  return (
    <AiSources
      messages={state.messages}
      status={state.status}
      onReplay={() => {
        state.setMessages([]);
        void state.sendMessage(fixture.question);
      }}
    />
  );
}

import * as AiStackTraceFixture from "../../mocks/ai-elements/stack-trace";
export function AiStackTracePreview() {
  const fixture = AiStackTraceFixture;
  const state = useChat<AiStackTraceFixture.ChatMessage>({
    messages: fixture.transcript,
    transport: fixture.transport,
  });
  return (
    <AiStackTrace
      messages={state.messages}
      status={state.status}
      onReplay={() => {
        state.setMessages([]);
        void state.sendMessage(fixture.question);
      }}
    />
  );
}

import * as AiSubagentFixture from "../../mocks/ai-elements/subagent";
export function AiSubagentPreview() {
  const fixture = AiSubagentFixture;
  const state = useChat<AiSubagentFixture.ChatMessage>({
    messages: fixture.transcript,
    transport: fixture.transport,
  });
  return (
    <AiSubagent
      messages={state.messages}
      status={state.status}
      onReplay={() => {
        state.setMessages([]);
        void state.sendMessage(fixture.question);
      }}
    />
  );
}

import * as AiTaskFixture from "../../mocks/ai-elements/task";
export function AiTaskPreview() {
  const fixture = AiTaskFixture;
  const state = useChat<AiTaskFixture.ChatMessage>({
    messages: fixture.transcript,
    transport: fixture.transport,
  });
  return (
    <AiTask
      messages={state.messages}
      status={state.status}
      onReplay={() => {
        state.setMessages([]);
        void state.sendMessage(fixture.question);
      }}
    />
  );
}

import * as AiTerminalFixture from "../../mocks/ai-elements/terminal";
export function AiTerminalPreview() {
  const fixture = AiTerminalFixture;
  const state = useChat<AiTerminalFixture.ChatMessage>({
    messages: fixture.transcript,
    transport: fixture.transport,
  });
  return (
    <AiTerminal
      messages={state.messages}
      status={state.status}
      onReplay={() => {
        state.setMessages([]);
        void state.sendMessage(fixture.question);
      }}
    />
  );
}

import * as AiTestResultsFixture from "../../mocks/ai-elements/test-results";
export function AiTestResultsPreview() {
  const fixture = AiTestResultsFixture;
  const state = useChat<AiTestResultsFixture.ChatMessage>({
    messages: fixture.transcript,
    transport: fixture.transport,
  });
  return (
    <AiTestResults
      messages={state.messages}
      status={state.status}
      onReplay={() => {
        state.setMessages([]);
        void state.sendMessage(fixture.question);
      }}
    />
  );
}

import * as AiToolFixture from "../../mocks/ai-elements/tool";
export function AiToolPreview() {
  const fixture = AiToolFixture;
  const state = useChat<AiToolFixture.ChatMessage>({
    messages: fixture.transcript,
    transport: fixture.transport,
  });
  return (
    <AiTool
      messages={state.messages}
      status={state.status}
      onReplay={() => {
        state.setMessages([]);
        void state.sendMessage(fixture.question);
      }}
    />
  );
}

import * as AiContextFixture from "../../mocks/ai-elements/context";
export function AiContextPreview() {
  return <AiContext usage={AiContextFixture.usage} />;
}

import * as AiFileTreeFixture from "../../mocks/ai-elements/file-tree";
export function AiFileTreePreview() {
  return <AiFileTree files={AiFileTreeFixture.files} />;
}

import * as AiInlineCitationFixture from "../../mocks/ai-elements/inline-citation";
export function AiInlineCitationPreview() {
  return <AiInlineCitation paragraphs={AiInlineCitationFixture.paragraphs} />;
}

import * as AiMessageFixture from "../../mocks/ai-elements/message";
export function AiMessagePreview() {
  return (
    <AiMessage
      prompt={AiMessageFixture.prompt}
      reply={AiMessageFixture.reply}
    />
  );
}

import * as AiModelSelectorFixture from "../../mocks/ai-elements/model-selector";
export function AiModelSelectorPreview() {
  return (
    <AiModelSelector
      providers={AiModelSelectorFixture.providers}
      efforts={AiModelSelectorFixture.efforts}
      onSend={() => {}}
    />
  );
}

import * as AiPromptInputFixture from "../../mocks/ai-elements/prompt-input";
export function AiPromptInputPreview() {
  return (
    <AiPromptInput
      providers={AiPromptInputFixture.providers}
      efforts={AiPromptInputFixture.efforts}
      onSend={() => {}}
    />
  );
}

import * as AiSuggestionFixture from "../../mocks/ai-elements/suggestion";
export function AiSuggestionPreview() {
  const [turn, setTurn] = React.useState<{
    prompt: string;
    reply: string;
  } | null>(null);
  return (
    <AiSuggestion
      suggestions={AiSuggestionFixture.suggestions}
      turn={turn}
      onSend={(prompt) =>
        setTurn({
          prompt,
          reply:
            AiSuggestionFixture.replies[prompt] ??
            "This demo only knows the suggestions. Pick one.",
        })
      }
    />
  );
}
