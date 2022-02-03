import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context';

const Navbar = () => {

  const { openSidebar, openSubmenu, closeSubmenu, links } = useGlobalContext();
  
  // display submenu
  const displaySubmenu = (e) => {
    e.preventDefault();
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  }
  // display navbar links
  const displayLinks = links.map((element, index) => {
    const { links, page } = element;
    return (
      <li key={index}>
        <button
          className='link-btn'
          onMouseOver={displaySubmenu}
        >
          {page}
        </button>
      </li>
    );
  });
   
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn'))
      closeSubmenu();
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img
            className='nav-logo'
            src={logo}
            alt='stripe'
          />
          <button
            className='btn toggle-btn'
            onClick={openSidebar}
          >
            <FaBars/>
          </button>        
        </div>
        
        <ul className='nav-links'>
          {displayLinks}
    {/*<li>
            <button
              className='link-btn'
              onMouseOver={displaySubmenu}
            >
              Products
            </button>
          </li>
          <li>
            <button
              className='link-btn'
              onMouseOver={displaySubmenu}
            >
              Developers
            </button>
          </li>
          <li>
            <button
              className='link-btn'
              onMouseOver={displaySubmenu}
            >
              Company
            </button>
          </li>*/}
        </ul>

        <button className='btn signin-btn'>sign in</button>
      </div>
    </nav>
  );
}

export default Navbar
