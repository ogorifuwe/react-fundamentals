import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context';

const Submenu = () => {

  const { isSubmenuOpen, location, page: { page, links } } = useGlobalContext();
  const container = useRef(null);
  const [ columns, setColumns ] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    const length = links.length;
    if (length === 3) {
      setColumns('col-3');
    } else if (length > 3) {
        setColumns('col-4');
    }
  }, [location, links]);

  const displayLinks = links.map((link, index) => {
    const { label, icon, url } = link;
    return (
      <a key={index} href={url}>
        {icon} {label}
      </a>
    );
  });
  
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        { displayLinks }
      </div>
    </aside>
  );
}

export default Submenu
