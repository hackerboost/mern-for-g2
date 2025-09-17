import { Moon, PlusSquareIcon, Plus, ShoppingCart, Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const user = {};
  const isAuthenticated = false;

  return (
    <div className="relative w-full p-6 bg-gray-300 shadow-xl">
      <div className="relative w-full flex justify-between items-center max-w-[90%] mx-auto">
        {/* Logo Section */}
        <div className="w-full flex items-center">
          <Link to="/" className="flex items-center">
            <h1 className="font-bold text-4xl text-blue-950">Product Store</h1>
            <ShoppingCart className="h-8 w-8" />
          </Link>
        </div>

        {/* Search Section */}
        <div className="relative w-full flex items-center justify-center">
          <div className="w-full relative border border-gray-900">
            <Search className="absolute ml-2 text-gray-600 opacity-80 w-6 h-6 top-1/2 left-0.5 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products, brands and more"
              className="w-full py-2 pl-10 rounded text-lg focus:outline-none"
            />
          </div>
          <button className="py-2 px-4 bg-blue-950 rounded cursor-pointer ml-1 text-white">
            Search
          </button>
        </div>

        {/* CTA Section */}
        <div className="w-full flex gap-6 justify-end">
          <Link to="/create">
            <button className="p-2 bg-blue-950 rounded cursor-pointer">
              <PlusSquareIcon className="text-white" />
            </button>
          </Link>

          <button className="p-2 bg-blue-950 rounded cursor-pointer">
            <Moon className="text-white" />
          </button>

          {/* User Authentication logic */}
          <div>
           {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <img
                  src={user.avatar || "./avatar.jpeg"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            ) : (
              <Link to="/login">
                <button className="py-2 px-4 bg-blue-950 rounded cursor-pointer text-white">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
