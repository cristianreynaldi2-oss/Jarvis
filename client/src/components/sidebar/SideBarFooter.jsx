import { User } from "lucide-react";

function SidebarFooter() {
  return (
    <div className="border-t border-slate-800 p-4">
      <div className="flex items-center gap-3">
        <User size={18} />

        <span>Cris Aldi</span>
      </div>
    </div>
  );
}

export default SidebarFooter;
