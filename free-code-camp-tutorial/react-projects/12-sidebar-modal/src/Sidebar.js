import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context';

const Sidebar = () => {

  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  // display links to internal pages
  const displayLinksToInternalPages = links.map(link => {
    const { id, url, text, icon } = link;
    return (
      <li key={id}>
        <a href={url}>{icon} {text}</a>
      </li>
    );
  });

  // display links to social media accounts
  const displayLinksToSocialMedialAccounts = social.map(platform => {
    const { id, url, icon } = platform;
    return (
      <li key={id}>
        <a href={url}>{icon}</a>
      </li>
    );
  });

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar' }`}>
      <div className='sidebar-header'>
        <img
          className='logo'
          src={logo}
          alt='coding addict'
        />
        <button
          className='close-btn'
          onClick={closeSidebar}
        >
          <FaTimes />
        </button>
      </div>  

      <ul className='links'>
        { displayLinksToInternalPages }
      </ul>

      <ul className='social-icons'>
        { displayLinksToSocialMedialAccounts }
      </ul>
    </aside>
  )
}

export default Sidebar
