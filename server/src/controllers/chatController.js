/**
 * Controller untuk menangani logika Chat
 */

export const handleChat = async (req, res) => {
  try {
    const { message } = req.body;

    // Validasi input
    if (!message || message.trim() === "") {
      return res.status(400).json({
        status: "error",
        message: "Message content cannot be empty.",
      });
    }

    // Simulasi delay Fake AI agar efek mengetik di frontend terasa natural
    setTimeout(() => {
      const replyMessage = `Ini adalah respons otomatis (Fake AI) dari backend Jarvis untuk pesanmu: "${message}"`;

      return res.status(200).json({
        status: "success",
        data: {
          reply: replyMessage,
          sender: "assistant",
          timestamp: new Date().toISOString(),
        },
      });
    }, 1500); // Delay 1.5 detik
  } catch (error) {
    console.error("Error in handleChat:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error.",
    });
  }
};
