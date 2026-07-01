import { Settings } from "lucide-react";
import { APP_NAME, APP_SUBTITLE } from "../../constants/app";

function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 px-6">
      <h1 className="text-lg font-semibold">{APP_NAME}</h1>

      <p className="text-xs text-slate-400">{APP_SUBTITLE}</p>

      <button
        className="
        rounded-xl
        p-2
        transition
        hover:bg-slate-800
      "
      >
        <Settings size={20} />
      </button>
    </header>
  );
}

export default Header;
