import { React, useState } from 'react';
import "./styles/Navbar.css"

const navLinks = [
  { navLinkId: 'Home', scrollToId: 'main' },
  { navLinkId: 'About', scrollToId: 'about' },
  { navLinkId: 'Skills', scrollToId: 'skills' },
  { navLinkId: 'Portfolio', scrollToId: 'portfolio' },
  { navLinkId: 'Contact', scrollToId: 'contact' },
];

export const NavLink = ({
  navLinkId,
  scrollToId,
  activeNavLinkId,
  setActiveNavLinkId,
}) => {
  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({
      behavior: 'smooth', // gives an ease-in-out effect to our scroll
    });
  };

  return (
    <span
      id={navLinkId}
      className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
      onClick={handleClick}
    >
      {navLinkId}
    </span>
  );
};

const NavBar = () => {
  const [activeNavLinkId, setActiveNavLinkId] = useState('');

  return (
    <div id='navbar'>
        
      <nav id='links'>
        <div>
            <span>Trenton Toplikar</span>
        </div>
        <div id="right-nav">
            {navLinks.map(({ navLinkId, scrollToId }) => (
                <NavLink
                id="nav-links"
                key={navLinkId}
                navLinkId={navLinkId}
                scrollToId={scrollToId}
                activeNavLinkId={activeNavLinkId}
                setActiveNavLinkId={setActiveNavLinkId}
                />
                ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
                