import { Plus } from "lucide-react";

function NewChatButton() {
  return (
    <button
      className="
      flex
      w-full
      items-center
      gap-2
      rounded-xl
      bg-blue-600
      px-4
      py-3
      font-medium
      transition
      hover:bg-blue-700
    "
    >
      <Plus size={18} />
      New Session
    </button>
  );
}

export default NewChatButton;
