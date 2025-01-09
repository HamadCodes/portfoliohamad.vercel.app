"use client"
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <Link href="/" className="nav__logo">
            Hamad
          </Link>
        </div>

        <div className={`nav__menu ${isMenuOpen ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link href="#home" className="nav__link active-link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link href="#about" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link href="#skills" className="nav__link">
                Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link href="#work" className="nav__link">
                Work
              </Link>
            </li>
            <li className="nav__item">
              <Link href="#contact" className="nav__link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
