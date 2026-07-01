import { useEffect, useRef } from "react";

import UserMessage from "./UserMessage";
import AssistantMessage from "./AssistantMessage";
import TypingIndicator from "./TypingIndicator";

function MessageList({ messages, isTyping }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        {messages.map((message) => {
          if (message.role === "user") {
            return <UserMessage key={message.id} message={message.content} />;
          }

          return (
            <AssistantMessage key={message.id} message={message.content} />
          );
        })}

        {isTyping && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default MessageList;
