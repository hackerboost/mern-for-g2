import { Moon, PlusSquareIcon, Plus, ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full p-6 bg-gray-300 shadow-xl">
      <div className="w-full flex justify-between items-center max-w-[90%] mx-auto">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <h1 className="font-bold text-4xl text-blue-950">Product Store</h1>
            <ShoppingCart className="h-8 w-8" />
          </Link>
        </div>
        <div className="flex gap-6">
          <Link to="/create">
            <button className="p-2 bg-blue-950 rounded cursor-pointer">
              <PlusSquareIcon className="text-white" />
            </button>
          </Link>

          <button className="p-2 bg-blue-950 rounded cursor-pointer">
            <Moon className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
