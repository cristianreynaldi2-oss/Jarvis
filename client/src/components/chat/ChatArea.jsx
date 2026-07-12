import { useState } from "react";
import Conversation from "../conversation/Conversation";
import ChatInput from "./ChatInput";

function ChatArea() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  // Mengubah fungsi menjadi async agar bisa menangani proses kirim data lewat jaringan
  const handleSendMessage = async (text) => {
    // 1. Tampilkan pesan user di layar segera setelah dikirim
    const userMessage = {
      id: Date.now(),
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true); // Memunculkan indikator loading/mengetik

    try {
      // 2. Kirim request ke backend Express menggunakan fetch
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }), // Mengemas pesan menjadi JSON
      });

      // 3. Baca data respons dari backend
      const result = await response.json();

      if (response.ok && result.status === "success") {
        // 4. Masukkan respons dari server ke dalam state chat layar
        const assistantMessage = {
          id: Date.now() + 1,
          role: "assistant",
          content: result.data.reply, // Mengambil teks balasan dari struktur data backend kita
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        // Menangani jika backend mengirim status error (misal status 400 atau 500)
        throw new Error(
          result.message || "Gagal mendapatkan respons dari server.",
        );
      }
    } catch (error) {
      console.error("Error connecting to backend:", error);

      // Tampilkan pesan error di balon chat sebagai pemberitahuan ke user
      const errorMessage = {
        id: Date.now() + 1,
        role: "assistant",
        content: "🚨 Waduh, koneksi ke backend Jarvis terputus atau error!",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false); // Matikan indikator mengetik baik sukses maupun gagal
    }
  };

  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <Conversation messages={messages} isTyping={isTyping} />
      <ChatInput onSend={handleSendMessage} />
    </main>
  );
}

export default ChatArea;
