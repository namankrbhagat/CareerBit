import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsRobot } from 'react-icons/bs';
import { CircleDollarSign } from 'lucide-react';
import { useSelector } from 'react-redux';
import AuthModel from './AuthModel';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  
  const { userData } = useSelector(state => state.user);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
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
          
          <div className="relative" ref={dropdownRef}>
            <div 
              onClick={() => setShowDropdown(!showDropdown)}
              className="bg-stone-100 px-3 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer hover:bg-stone-200 transition-colors"
            >
              <CircleDollarSign className="w-[18px] h-[18px] text-stone-500" />
              <span className="text-xs font-bold text-stone-800 tracking-tight">100</span>
            </div>

            {/* Dropdown Menu */}
            <div 
                className={`absolute top-full mt-3 right-0 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-4 px-4 flex flex-col gap-3 pointer-events-auto origin-top transition-all duration-300 ${showDropdown ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
            >
                <p className="text-xs text-gray-500 font-medium text-center">Need more credits?</p>
                <Link 
                  to="/pricing" 
                  onClick={() => setShowDropdown(false)}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-bold py-2.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 text-sm"
                >
                  View Pricing
                </Link>
            </div>
          </div>

          <div 
             className="bg-black text-white w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shadow-sm uppercase select-none"
          >
            {userData ? userData.name.charAt(0) : "A"}
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
