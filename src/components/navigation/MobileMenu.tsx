import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';

type MobileMenuProps = {
  isOpen : boolean;
  onToggle: () => void;
};

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  const links = [
    { href: '/', label: 'Home' },
    { href: '#', label: 'Downloads' },
    { href: '#', label: 'Contact' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/PartnerForm', label: 'Become a Partner' }, 
  ];

  return (
    <div className="md:hidden">
      <button onClick={onToggle} className="text-gray-300 hover:text-white">
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-navy-900/95 backdrop-blur-sm p-4 border-t border-gray-800 animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}