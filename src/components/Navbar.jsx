import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <nav className="navbar">
      <>
        {/* Navbar Layout: Left Links | Logo | Right Links */}
        <div
          className="navbar-content"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            marginTop:'20px',
            position: 'relative',
          }}
        >
          {/* Left NavLinks */}
          <div className="desktopNavbar navbar-left">
            <ul
              className="navLinks left"
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: 0,
                padding: 0,
                gap: '44px',
                listStyle: 'none',
                position: 'relative',
              }}
            >
              <li
                className="navItem"
                style={{ position: 'relative' }}
                onMouseEnter={() => setHomeDropdown(true)}
                onMouseLeave={() => setHomeDropdown(false)}
              >
                <Link to="/">Home</Link>
                {homeDropdown && (
                  <ul
                    className="dropdownMenu"
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      background: '#fff',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                      padding: '8px 0',
                      margin: 0,
                      listStyle: 'none',
                      minWidth: '140px',
                      zIndex: 10,
                    }}
                  >

                  
                  </ul>
                )}
              </li>
              <li className="navItem">
                <Link to="/about" >About</Link>
              </li>
              <li className="navItem">
                <Link to="/room">Rooms</Link>
              </li>
            </ul>
          </div>
          {/* Center Logo */}
          <div
            className="logo"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: '0 1 auto',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
            }}
          >
            <img
              src={Logo}
              alt="Logo"
               className="navbar-logo"
              style={{
                height: '65px',
                filter: 'invert(1) brightness(2)',
                display: 'block',
                margin: '0 auto',
              }}
            />
          </div>
          {/* Right NavLinks */}
          <div className="desktopNavbar navbar-right">
            <ul
              className="navLinks right"
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: 0,
                padding: 0,
                gap: '24px',
                listStyle: 'none',
              }}
            >
              <li className="navItem">
                <Link to="/team">Team</Link>
              </li>
              <li className="navItem">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="navItem">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* Burger Icon (mobile only) */}
          <div
            className="burger"
            onClick={() => setMenuOpen(!menuOpen)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setMenuOpen(!menuOpen);
              }
            }}
            aria-label="Toggle menu"
            tabIndex={0}
            role="button"
            style={{
              color: '#fff',
              cursor: 'pointer',
              borderRadius: '50%',
              padding: '10px',
              transition: 'background 0.2s, box-shadow 0.2s',
              zIndex: 1001,
              marginTop: '0',
              position: 'relative',
              display: 'none',
              background: menuOpen
                ? 'rgba(44, 44, 84, 1)'
                : 'rgba(44, 44, 84, 0.95)',
              boxShadow: menuOpen
                ? '0 2px 12px rgba(44,44,84,0.2)'
                : 'none',
              border: menuOpen ? '2px solid #fff' : 'none',
            }}
          >
            {menuOpen ? (
              // Cancel (X) icon
              <svg width="28" height="28" viewBox="0 0 28 28">
                <line
                  x1="6"
                  y1="6"
                  x2="22"
                  y2="22"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="22"
                  y1="6"
                  x2="6"
                  y2="22"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              // Burger icon: two horizontal bars
              <svg width="28" height="28" viewBox="0 0 28 28">
                <line
                  x1="6"
                  y1="10"
                  x2="22"
                  y2="10"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="6"
                  y1="18"
                  x2="22"
                  y2="18"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </div>
        {/* Overlay menu for mobile */}
        {menuOpen && (
          <div
            className="mobileMenu"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background:'white',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: 'center',
              }}
            >
              <li style={{ margin: '20px 0' }}>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li style={{ margin: '20px 0' }}>
                <Link to="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li style={{ margin: '20px 0' }}>
                <Link to="/room" onClick={() => setMenuOpen(false)}>
                  Rooms
                </Link>
              </li>
              <li style={{ margin: '20px 0' }}>
                <Link to="/team" onClick={() => setMenuOpen(false)}>
                  Team
                </Link>
              </li>
              <li style={{ margin: '20px 0' }}>
                <Link to="/blog" onClick={() => setMenuOpen(false)}>
                  Blog
                </Link>
              </li>
              <li style={{ margin: '20px 0' }}>
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
        {/* Only keep mobile/desktop visibility here, all other styles in Navbar.css */}
        <style>
          {`
            @media (max-width: 700px ) {
              .desktopNavbar {
                display: none !important;
              }
              .burger {
                display: block !important;
              }
            }
          `}
        </style>
      </>
    </nav>




</>
  );
};

export default Navbar;