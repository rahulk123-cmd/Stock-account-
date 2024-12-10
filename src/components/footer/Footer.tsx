import React from 'react';
import { Newsletter } from './Newsletter';
import { FooterSection } from './FooterSection';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  const quickLinks = {
    title: 'Important Links',
    links: [
      { text: 'Pages', href: '#' },
      { text: 'Blog', href: '#' },
      { text: 'Contact', href: '#' },
      { text: 'How to use', href: '#' },
      { text: 'Roadmap', href: '#' },
    ],
  };

  const services = {
    title: 'Services',
    links: [
      { text: 'Image Generator', href: '#' },
      { text: 'Video Generator', href: '#' },
      { text: 'Text Generator', href: '#' },
      { text: 'Code Generator', href: '#' },
      { text: 'Education Feedback', href: '#' },
    ],
  };

  return (
    <footer className="bg-gray-50 dark:bg-navy-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo and Newsletter Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://stockandaccountbook.com/logo.png"
                alt="Logo"
                className="w-10 h-10"
              />
              <span className="text-gray-900 dark:text-white font-bold text-xl">
                Stock And Account Book
              </span>
            </div>
            <Newsletter />
          </div>

          {/* Quick Links Section */}
          <FooterSection {...quickLinks} />
          
          {/* Services Section */}
          <FooterSection {...services} />
          
          {/* Contact Section */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 text-appColor flex-shrink-0 mt-1" />
                <span className="text-sm">
                  8819 Ohio St. South Gate, North America, USA
                </span>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5 text-appColor flex-shrink-0" />
                <a 
                  href="mailto:example@domain.com" 
                  className="hover:text-appColor text-sm"
                >
                  example@domain.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5 text-appColor flex-shrink-0" />
                <a 
                  href="tel:+1386-688-3295" 
                  className="hover:text-appColor text-sm"
                >
                  +1 386-688-3295
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-100 dark:bg-navy-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Company Copyright */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Stock And Account Book
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-4">
            <a 
              href="/privacy" 
              className="text-gray-600 dark:text-gray-400 hover:text-appColor transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-gray-600 dark:text-gray-400 hover:text-appColor transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="/contact" 
              className="text-gray-600 dark:text-gray-400 hover:text-appColor transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaFacebook size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
