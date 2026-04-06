import React from 'react';
import { Link } from 'react-router-dom';
import { BsRobot } from 'react-icons/bs';
import { CircleDollarSign } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed top-4 left-4 right-4 z-50 flex justify-center pointer-events-none">
      <nav className="w-full max-w-5xl bg-white rounded-full px-3 py-3 flex justify-between items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 pointer-events-auto">
        
        {/* Left Side: Logo */}
        <Link to="/" className="flex items-center gap-3 ml-1">
          <div className="bg-black text-white w-9 h-9 rounded-[10px] flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
            <BsRobot size={18} />
          </div>
          <span className="font-bold text-[15px] text-stone-900 tracking-tight">CareerBit.ai</span>
        </Link>

        {/* Right Side: Tokens and Profile */}
        <div className="flex items-center gap-3 mr-1">
          
          <div className="bg-stone-100 px-3 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer hover:bg-stone-200 transition-colors">
            <CircleDollarSign className="w-[18px] h-[18px] text-stone-500" />
            <span className="text-xs font-bold text-stone-800 tracking-tight">100</span>
          </div>

          <div className="bg-black text-white w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shadow-sm cursor-pointer hover:bg-stone-800 transition-colors">
            A
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
