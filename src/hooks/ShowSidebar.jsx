import { createContext, useContext, useEffect, useState } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  if(showSidebar){
    document.body.style.overflowY = 'hidden';
  }else{
    document.body.style.overflowY = 'auto';
  }
    const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };
  const hideSidebar = () => {
    setShowSidebar(false);
  };
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === 'Escape') hideSidebar();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <SidebarContext.Provider
      value={{ showSidebar, toggleSidebar, hideSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);
