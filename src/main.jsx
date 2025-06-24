import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './hooks/Theme.jsx';
import { SidebarProvider } from './hooks/ShowSidebar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SidebarProvider>
        <App />
        </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
