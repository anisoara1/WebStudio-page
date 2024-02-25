import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from './Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { PortofolioPage } from '../pages/PortofolioPage';
import { StudioPage } from '../pages/StudioPage';
import { NotFound } from '../pages/NotFound';
import ErrorBoundary from '../ErrorBoundary';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const headerRef = useRef(null);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'light' : 'dark',
      primary: {
        main: '#90caf9',
      },
      secondary: {
        main: '#131052',
      },
    },
  });

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header ref={headerRef} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/portofolio" element={<PortofolioPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ErrorBoundary />
    </ThemeProvider>
  );
}
