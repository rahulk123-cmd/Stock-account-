import React from 'react';
import { Menu, X } from 'lucide-react';

type MobileMenuProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button onClick={onToggle} className="text-gray-300 hover:text-white">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-navy-900/95 backdrop-blur-sm p-4 border-t border-gray-800 animate-fadeIn">
          <div className="flex flex-col space-y-4">
          <a href="#" className="text-appColor dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
          <a href="#" className="text-appColor dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-appColor dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a> 
          <a href="#" className="text-appColor dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Downloads</a>
          </div>
        </div>
      )}
    </div>
  );
}