'use client'
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ShoppingCart, User, Search, Menu } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { RootState } from '@/services/redux/store';
import Link from 'next/link';
import { toggleModal } from '@/services/redux/slices/modalSlice';
import { clearUser } from '@/services/redux/slices/userSlice';
import Cookies from 'js-cookie';

const Header = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const isLoggedIn = Boolean(user && user.id);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter()
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showExamsDropdown, setShowExamsDropdown] = useState(false);
  const examsDropdownRef = useRef<HTMLDivElement>(null);


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
      if (examsDropdownRef.current && !examsDropdownRef.current.contains(event.target as Node)) {
        setShowExamsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    dispatch(clearUser());
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    setShowDropdown(false);
    router.push('/')
  };

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

              {isLoggedIn ? (
                <div className="profile-dropdown" ref={dropdownRef}>
                  <button
                    className="main-nav-link profile-btn"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    Profile
                  </button>
                  {showDropdown && (
                    <div className="dropdown-menu">
                      <Link href="/profile" className="dropdown-item">My Profile</Link>
                      <button onClick={handleLogout} className="dropdown-item logout-btn">
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <button className="icon-button" onClick={() => dispatch(toggleModal())}><User size={20} /></button>
                </>
              )}


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

    </>
  );
};

export default Header;