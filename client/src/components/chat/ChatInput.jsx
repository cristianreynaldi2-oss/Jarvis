import { SendHorizontal } from "lucide-react";
import { useState } from "react";

function ChatInput() {
  const [message, setMessage] = useState("");
  const handleSend = () => {
    console.log(message);
  };

  return (
    <div className="border-t border-slate-800 p-4">
      <div className="flex items-end rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3">
        <textarea
          rows={1}
          placeholder="Message Jarvis..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="
            flex-1
            py-2
            resize-none
            bg-transparent
            outline-none
            placeholder:text-slate-500
        "
        />

        <button
          onClick={handleSend}
          className="
                rounded-xl
                bg-blue-600
                p-2
                transition
                hover:bg-blue-700
            "
        >
          <SendHorizontal size={18} />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
