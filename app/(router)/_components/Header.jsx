import { Button } from "@/components/ui/button";
import { BellDot, Search } from "lucide-react";

function Header() {
  return (
    <div className="p-4 bg-white flex justify-between">
      <div className="flex gap-2 border p-2 rounded-md">
        {/* Search Bar */}
        <Search className="h-5 w-5" />
        <input
          type="text"
          placeholder="Search for courses"
          className="outline-none"
        />
      </div>
      {/* Get Started Button & bell Icon */}
      <div className="flex items-center gap-4">
        <BellDot className="text-gray-500"/>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}

export default Header;
