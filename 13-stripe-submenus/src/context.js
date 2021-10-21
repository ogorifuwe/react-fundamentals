import React, { useState, useContext } from 'react'
import sublinks from './data'


const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
  const [ isSubmenuOpen, setIsSubmenuOpen ] = useState(false);
  const [ links ] = useState(sublinks);
  const [ location, setLocation ] = useState({});
  const [ page, setPage ] = useState({ page: '', links:[] });

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  const openSubmenu = (text, coordinates) => {
    const currentPage = links.find(link => link.page === text);
    setPage(currentPage);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  }

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        links,
        location,
        page
      }}
    >
      { children }
    </AppContext.Provider>  
  );

}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppProvider, useGlobalContext };
