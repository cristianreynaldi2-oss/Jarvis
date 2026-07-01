import { Search } from "lucide-react";

function SearchButton() {
  return (
    <button
      className="
      mt-3
      flex
      w-full
      items-center
      gap-2
      rounded-xl
      px-4
      py-3
      text-slate-300
      transition
      hover:bg-slate-800
    "
    >
      <Search size={18} />
      Search
    </button>
  );
}

export default SearchButton;
