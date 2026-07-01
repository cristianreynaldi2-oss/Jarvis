import SidebarHeader from "./SidebarHeader";
import NewChatButton from "./NewChatButton";
import SearchButton from "./SearchButton";
import SidebarFooter from "./SidebarFooter";

function Sidebar() {
  return (
    <aside className="flex w-[280px] flex-col border-r border-slate-800 bg-slate-900">
      <SidebarHeader />

      <div className="flex-1 p-4">
        <NewChatButton />

        <SearchButton />

        <div className="mt-6 text-sm text-slate-500">No conversations yet</div>
      </div>

      <SidebarFooter />
    </aside>
  );
}

export default Sidebar;
