"use client";

import Link from "next/link";
import { Home } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="mx-auto w-fit flex items-center rounded-full bg-neutral-900/80 backdrop-blur-md px-5 py-3 border border-white/10">
      <Link 
        href="/"
        className="group relative flex items-center justify-center p-2 transition-all duration-300"
        aria-label="Home"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
        <Home 
          size={48} 
          strokeWidth={1.5}
          className="text-white/80 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]" 
        />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </Link>
    </nav>
  );
};

export default Navbar;