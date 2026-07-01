import { PanelLeft } from "lucide-react";
import { APP_NAME, APP_SUBTITLE } from "../../constants/app";

function SidebarHeader() {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 p-4">
      <div className="flex items-center gap-2">
        <PanelLeft size={20} />
        <h1 className="text-lg font-bold">{APP_NAME}</h1>
      </div>

      <button className="rounded-lg p-2 transition hover:bg-slate-800">
        🌙
      </button>
    </div>
  );
}

export default SidebarHeader;
