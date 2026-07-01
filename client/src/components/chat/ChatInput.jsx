import { SendHorizontal } from "lucide-react";

function ChatInput() {
  return (
    <div className="border-t border-slate-800 p-4">
      <div className="flex items-center rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3">
        <input
          type="text"
          placeholder="Message Jarvis..."
          className="
            flex-1
            bg-transparent
            outline-none
            placeholder:text-slate-500
          "
        />

        <button
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
