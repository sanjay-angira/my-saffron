'use client'
import { useState } from 'react';
import { ChevronDown, ShoppingCart, User, Search, Menu } from "lucide-react";
import LoginModal from './LoginModal';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const categories = [
    {
      name: "Rudraksha",
      items: ["1 Mukhi", "5 Mukhi", "7 Mukhi", "Rudraksha Malas", "Rare Rudraksha"]
    },
    {
      name: "Sweets",
      items: ["Peda", "Mathura Peda", "Kheer", "Laddu", "Barfi"]
    },
    {
      name: "Malas",
      items: ["Tulsi Mala", "Crystal Mala", "Sandalwood Mala", "108 Beads Mala"]
    },
    {
      name: "Puja Items",
      items: ["Incense", "Diyas", "Puja Thali", "Sacred Books", "Yantra"]
    }
  ];

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <a href="/" className="logo">
              <div className="logo-icon">🕉</div>
              <span className="logo-text">Sacred Store</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="nav">
              <button className="nav-button">Home</button>
              
              {categories.map((category) => (
                <div key={category.name} className="nav-item">
                  <button className="nav-button">
                    {category.name} <ChevronDown size={16} />
                  </button>
                  <div className="dropdown">
                    {category.items.map((item) => (
                      <a key={item} href="#" className="dropdown-item">
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="header-actions">
              <button className="icon-button">
                <Search size={20} />
              </button>
              
              <button className="icon-button">
                <ShoppingCart size={20} />
              </button>
              
              <button 
                className="icon-button"
                onClick={() => setIsLoginOpen(true)}
              >
                <User size={20} />
              </button>

              {/* Mobile Menu Button */}
              <button 
                className="icon-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{ display: isMobile ? 'block' : 'none' }}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div style={{ display: 'block', borderTop: '1px solid #e0e0e0', padding: '1rem 0' }}>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button className="nav-button" style={{ width: '100%', justifyContent: 'flex-start' }}>
                  Home
                </button>
                {categories.map((category) => (
                  <div key={category.name}>
                    <button className="nav-button" style={{ width: '100%', justifyContent: 'flex-start', fontWeight: '600' }}>
                      {category.name}
                    </button>
                    {category.items.map((item) => (
                      <button 
                        key={item}
                        className="nav-button" 
                        style={{ 
                          width: '100%', 
                          justifyContent: 'flex-start', 
                          paddingLeft: '1.5rem',
                          color: '#666666'
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
};

export default Header;