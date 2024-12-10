import React, { useState } from 'react';
import { NavLink } from './NavLink';
import { FaChevronDown } from 'react-icons/fa';

export function NavLinks() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '#', label: 'Contact' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/PartnerForm', label: 'Become a Partner' }, // Ensure this link points to the new Pricing page
  ];

  return (
    <div className="hidden md:flex items-center space-x-8">
      {links.map((link) => (
        <NavLink key={link.label} href={link.href}>
          {link.label}
        </NavLink>
      ))}
      <ul className="flex space-x-6">
        <li className="relative">
          <button onClick={toggleDropdown} className="flex items-center text-lg font-semibold dark:text-white hover:text-appColor">
            Downloads
            <span className={`ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
              ▼ {/* Change to a "V" shape */}
            </span>
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-white shadow-lg mt-1 rounded w-80 lg:w-100"> {/* Increased width for card */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">RETAIL SOFTWARES</h3> {/* Header for the mega menu */}
                <ul className="py-2 grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Responsive grid layout */}
                  <li>
                    <a href="https://stockandaccountbook.com/downloads/Stock And Account Book Jeweller.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Jeweller</a>
                    </li>
                  <li>
                    <a href="https://stockandaccountbook.com/downloads/Stock And Account Book Gold.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Gold</a>
                    </li>
                  <li>
                    <a href="https://stockandaccountbook.com/downloads/Stock And Account Book Barcode.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Barcode</a>
                    </li>
                  <li>
                    <a href="https://stockandaccountbook.com/downloads/Stock And Account Book Jeweller.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Wholesale</a>
                    </li>
                  <li>
                    <a href="https://stockandaccountbook.com/downloads/Stock And Account Book Gold.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Garments</a>
                    </li>
                  <li>
                    <a href="https://stockandaccountbook.com/downloads/Stock And Account Book Barcode.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book General Stores</a>
                    </li>
                  <li>
                    <a href="https://stockandaccountbook.com/downloads/Stock And Account Book Jeweller.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Jeweller Marts</a>
                    </li>
                  <li>
                    <a href="https://stockandaccountbook.com/downloads/Stock And Account Book Gold.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Manufacturer</a>
                    </li>
                  <li>
                    <a href="https://stockandaccountbook.com/downloads/Stock And Account Book Barcode.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Ecommerce</a>
                    </li>
                  <li>
                    <a href="https://stockandaccountbook.com/downloads/Stock And Account Book Barcode.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Medical</a>
                    </li>
                  <li>
                    <a href="https://stockandaccountbook.com/downloads/Stock And Account Book Jeweller.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Gold Trader</a>
                    </li>
                  <li>
                    <a href="https://stockandaccountbook.com/downloads/Stock And Account Book Gold.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Hallmarking</a>
                    </li>
                  <li>
                    <a href="https://stockandaccountbook.com/downloads/Stock And Account Book Barcode.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Import / Exports</a>
                    </li>
                  <li>
                    <a href="https://stockandaccountbook.com/downloads/Stock And Account Book Barcode.exe" className="block px-4 py-2 hover:bg-gray-200">Stock And Account Book Mobile Shops</a>
                    </li>
                </ul>
              </div>
            </div>
          )}
        </li>
      </ul>
     </div>
  );
}