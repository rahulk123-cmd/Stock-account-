import React, { useState } from 'react';
import { Moon, Sun} from 'lucide-react';
import { Logo } from '../Logo';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { IconButton } from '../buttons/IconButton';
import { useThemeContext } from '../../context/ThemeProvider';


export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useThemeContext();

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-navy-900/95 backdrop-blur-sm z-50 px-6 py-4 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <NavLinks />
        <div className="flex items-center gap-4">
          <IconButton 
            Icon={theme === 'dark' ? Sun : Moon} 
            onClick={toggleTheme}
          />
          <MobileMenu 
            isOpen={isMenuOpen} 
            onToggle={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </div>
      </div>
    </nav>
  );
}