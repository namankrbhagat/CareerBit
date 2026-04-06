import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-50 w-full py-16 px-8 border-t border-stone-200/20 font-body text-sm antialiased">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-lg font-black text-stone-900">CareerBit.ai</div>
          <p className="text-stone-500 max-w-xs">Elevating human potential through editorial-grade AI interview simulations.</p>
        </div>
        <div>
          <h4 className="font-bold text-stone-900 mb-6">Product</h4>
          <ul className="space-y-4 text-stone-500">
            <li><a className="hover:text-emerald-600 transition-colors" href="#">Features</a></li>
            <li><a className="hover:text-emerald-600 transition-colors" href="#">Pricing</a></li>
            <li><a className="hover:text-emerald-600 transition-colors" href="#">Enterprise</a></li>
            <li><a className="hover:text-emerald-600 transition-colors" href="#">Case Studies</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-stone-900 mb-6">Company</h4>
          <ul className="space-y-4 text-stone-500">
            <li><a className="hover:text-emerald-600 transition-colors" href="#">About</a></li>
            <li><a className="hover:text-emerald-600 transition-colors" href="#">Careers</a></li>
            <li><a className="hover:text-emerald-600 transition-colors" href="#">Blog</a></li>
            <li><a className="hover:text-emerald-600 transition-colors" href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-stone-900 mb-6">Legal</h4>
          <ul className="space-y-4 text-stone-500">
            <li><a className="hover:text-emerald-600 transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-emerald-600 transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-emerald-600 transition-colors" href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-200/50 text-stone-400 text-center md:text-left">
        © {new Date().getFullYear()} CareerBit.ai. Editorial Precision in AI.
      </div>
    </footer>
  );
};

export default Footer;
