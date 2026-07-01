import { useState } from "react";

import Conversation from "../conversation/Conversation";
import ChatInput from "./ChatInput";

function ChatArea() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (text) => {
    const userMessage = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    setTimeout(() => {
      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: getFakeReply(text),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      setIsTyping(false);
    }, 900);
  };

  function getFakeReply(message) {
    const text = message.toLowerCase();

    if (text.includes("halo")) {
      return "Halo! Saya Jarvis. Senang bertemu denganmu. 👋";
    }

    if (text.includes("siapa kamu")) {
      return "Saya Jarvis, AI Assistant yang sedang kamu bangun sendiri. 🚀";
    }

    if (text.includes("apa kabar")) {
      return "Saya baik! Terima kasih sudah bertanya 😄";
    }

    return "Maaf, saat ini saya masih menggunakan Fake AI. Nanti kita akan menghubungkan saya ke AI sungguhan.";
  }

  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <Conversation messages={messages} isTyping={isTyping} />

      <ChatInput onSend={handleSendMessage} />
    </main>
  );
}

export default ChatArea;
