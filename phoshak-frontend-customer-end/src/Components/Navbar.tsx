import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  User,
  ShoppingBag,
  Percent,
  Search,
  Heart,
  ShoppingCart,
  LogIn,
  UserPlus,
} from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", icon: <Home size={16} />, href: "#" },
    { label: "MEN", icon: <User size={16} />, href: "#" },
    { label: "WOMEN", icon: <User size={16} />, href: "#" },
    { label: "COLLECTIONS", icon: <ShoppingBag size={16} />, href: "#" },
    { label: "SALE%", icon: <Percent size={16} className="text-pink-600" />, href: "#" },
    { label: "Search", icon: <Search size={16} />, href: "#" },
    { label: "Wishlist", icon: <Heart size={16} className="text-red-500" />, href: "#" },
    { label: "Cart", icon: <ShoppingCart size={16} className="text-purple-600" />, href: "#" },
  ];

  return (
    <nav className="w-full shadow-sm bg-[#F7CAC9]">
      <div className="w-full px-4 lg:px-8 ">
        <div className="flex justify-between h-14 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-black">Poshak</span>
          </div>

          {/* Center Nav Items */}
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-5">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-1 text-sm text-gray-700 hover:text-black transition"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Right Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#"
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-black"
            >
              <LogIn size={16} />
              <span>Login</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-black"
            >
              <UserPlus size={16} />
              <span>Sign up</span>
            </a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#F7CAC9] px-4 pb-4 space-y-3 border-t fixed w-full z-5 rounded-b-2xl">
          {/* Nav Items */}
          <div className="space-y-2">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-black"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="mt-3 space-y-2 border-t pt-3">
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-black"
            >
              <LogIn size={16} />
              <span>Login</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-black"
            >
              <UserPlus size={16} />
              <span>Sign in</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
