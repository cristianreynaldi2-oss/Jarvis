import ollama from "ollama";

/**
 * Controller untuk menangani logika Chat dengan Ollama Lokal
 */
export const handleChat = async (req, res) => {
  try {
    const { message } = req.body;

    // Validasi input kosong
    if (!message || message.trim() === "") {
      return res.status(400).json({
        status: "error",
        message: "Message content cannot be empty.",
      });
    }

    // Melakukan request ke Ollama yang berjalan secara lokal
    // Catatan: Pastikan model 'llama3' sudah terunduh di Ollama kamu.
    // Kamu bisa menggantinya dengan 'mistral', 'gemma', atau model lain yang kamu punya.
    const response = await ollama.chat({
      model: "llama3.2:3b",
      messages: [{ role: "user", content: message }],
    });

    // Mengambil teks jawaban hasil generate dari LLM
    const aiReply = response.message.content;

    return res.status(200).json({
      status: "success",
      data: {
        reply: aiReply,
        sender: "assistant",
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Error in handleChat with Ollama:", error);
    return res.status(500).json({
      status: "error",
      message:
        "Failed to communicate with local AI Engine. Make sure Ollama is running.",
    });
  }
};
