import UserMessage from "./UserMessage";
import AssistantMessage from "./AssistantMessage";

function MessageList({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto px-6 py-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        {messages.map((message) => {
          if (message.role === "user") {
            return <UserMessage key={message.id} message={message.content} />;
          }

          return (
            <AssistantMessage key={message.id} message={message.content} />
          );
        })}
      </div>
    </div>
  );
}

export default MessageList;
