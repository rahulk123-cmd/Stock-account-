import React, { useState } from 'react';
import {Moon, Sun} from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { useThemeContext } from './ThemeProvider';
import { FaChevronDown } from 'react-icons/fa';


export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useThemeContext();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-navy-900/95 backdrop-blur-sm z-50 px-6 py-4 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`ml-3 font-bold text-xl bg-clip-text bg-gradient-to-r from-colorBlueApp to-appColor`}>Stock And Account Book</div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-appColor dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
          <a href="#" className="text-appColor dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</a>
          <a href="#" className="text-appColor dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
          <li className="relative">
          <button onClick={toggleDropdown} className="flex items-center">
            Downloads
            <FaChevronDown className="ml-1" /> {/* Dropdown icon */}
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-white shadow-lg">
              <ul>
                <li><a href="https://stockandaccountbook.com/downloads/Stock And Account Book Jeweller.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Jeweller</a></li>
                <li><a href="https://stockandaccountbook.com/downloads/Stock And Account Book Gold.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Gold</a></li>
                <li><a href="https://stockandaccountbook.com/downloads/Stock And Account Book Barcode.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Barcode</a></li>
                <li><a href="https://stockandaccountbook.com/downloads/Stock And Account Book Jeweller.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Wholesale</a></li>
                <li><a href="https://stockandaccountbook.com/downloads/Stock And Account Book Gold.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Garments</a></li>
                <li><a href="https://stockandaccountbook.com/downloads/Stock And Account Book Barcode.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book General Stores</a></li>
                <li><a href="https://stockandaccountbook.com/downloads/Stock And Account Book Jeweller.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Jeweller Marts</a></li>
                <li><a href="https://stockandaccountbook.com/downloads/Stock And Account Book Gold.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Manufacturer</a></li>
                <li><a href="https://stockandaccountbook.com/downloads/Stock And Account Book Barcode.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Ecommerce</a></li>
                <li><a href="https://stockandaccountbook.com/downloads/Stock And Account Book Barcode.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Medical</a></li>
                <li><a href="https://stockandaccountbook.com/downloads/Stock And Account Book Jeweller.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Gold Trader</a></li>
                <li><a href="https://stockandaccountbook.com/downloads/Stock And Account Book Gold.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Hallmarking</a></li>
                <li><a href="https://stockandaccountbook.com/downloads/Stock And Account Book Barcode.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Import / Exports</a></li>
                <li><a href="https://stockandaccountbook.com/downloads/Stock And Account Book Barcode.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Mobile Shops</a></li>
              </ul>
            </div>
          )}
        </li>

        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <MobileMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>
    </nav>
  );
}