import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/AboutUs' },
    { name: 'Services', path: '/service' },
    { name: 'Specialized Services', path: '/SpecialServices' },
    { name: 'Property Listing', path: '/property' },
    { name: 'Resources', path: '/resources' },
    { name: 'Testimonials', path: '/Testimonials' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav style={{
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000000,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '80px',
        }}>
          {/* Logo */}
          <div style={{ flexShrink: 0 }}>
            
          <div className="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" style={{ height: '40px' }}>
        <g fill="#e74c3c">
          <path d="M60 40 h30 v40 l40-25 l40 25 v-40 h30 v120 h-30 v-40 h-80 v40 h-30 z" />
          <rect x="120" y="70" width="15" height="15" />
          <rect x="145" y="70" width="15" height="15" />
        </g>
        <text x="150" y="170" textAnchor="middle" className="text" fill="#e74c3c" fontSize="24" fontWeight="bold">ARHIBU</text>
        <text x="150" y="190" textAnchor="middle" className="text" fill="#e74c3c" fontSize="16">HOMES</text>
      </svg>
    </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="nav-mobile-button"
          >
            {isOpen ? (
              <X style={{ width: '24px', height: '24px' }} />
            ) : (
              <Menu style={{ width: '24px', height: '24px' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav-mobile">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="nav-link"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

     
    </nav>
  );
};

export default Navbar;