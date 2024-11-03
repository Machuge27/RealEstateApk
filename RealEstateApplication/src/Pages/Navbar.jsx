import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Specialized Services', path: '/specialized-services' },
    { name: 'Property Listing', path: '/property-listing' },
    { name: 'Resources', path: '/resources' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav style={{
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
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
            <img
              src="/api/placeholder/150/50"
              alt="Arhibu Homes"
              style={{ height: '48px' }}
            />
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

      {/* CSS Styles */}
      <style>{`
        .nav-desktop {
          display: none;
        }
        
        @media (min-width: 1024px) {
          .nav-desktop {
            display: flex;
            align-items: center;
            gap: 1rem;
          }
          .nav-mobile-button {
            display: none;
          }
        }

        .nav-link {
          padding: 0.5rem 0.75rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          transition: all 0.2s;
        }
        
        .nav-link:hover {
          color: #991B1B;
          background-color: #F3F4F6;
        }
        
        .nav-mobile {
          padding: 1rem;
          background-color: white;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;