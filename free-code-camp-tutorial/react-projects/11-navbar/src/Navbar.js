import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [ isDisplayingLinks, setIsDisplayingLinks ] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isDisplayingLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
        linksContainerRef.current.style.height = 0;
    }
  }, [isDisplayingLinks] );

  const handleLinksDisplay = () => {
    setIsDisplayingLinks(!isDisplayingLinks);
  }

  const displayLinks = links.map(link => (
    <li key={link.id}><a href={link.url}>{link.text}</a></li>
  ));

  const displaySocialLinks = social.map(platform => (
    <li key={platform.id}><a href={platform.url}>{platform.icon}</a></li>
  ));

  return (
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='logo' />
        <button 
          className='nav-toggle'
          onClick={handleLinksDisplay}>
            <FaBars />
        </button>
      </div>

      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
          { displayLinks }
        </ul>
      </div>
     
      <ul className='social-icons'>
        { displaySocialLinks }
      </ul>
    </div>
  )
}

export default Navbar
