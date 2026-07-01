import { useState } from "react";

import Conversation from "../conversation/Conversation";
import ChatInput from "./ChatInput";

function ChatArea() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <main className="flex flex-1 flex-col">
      <Conversation messages={messages} />

      <ChatInput onSend={handleSendMessage} />
    </main>
  );
}

export default ChatArea;
