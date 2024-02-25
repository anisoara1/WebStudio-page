import React, { forwardRef, useEffect } from 'react';
import css from './Navbar.module.css';
import { Box, MenuList, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ThemeSwitch from 'components/ThemeSwich';

export const Header = forwardRef(({ toggleDarkMode }, ref) => {
  const handleClickContact = e => {
    e.preventDefault();
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (window.location.hash === '#footer') {
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <Box
      ref={ref}
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        borderBottom: '2px solid rgba(33, 33, 33, 0.3)',
      }}
      className={css.navbar}
    >
      <Link to="/studio" className={css.link}>
        <Typography
          sx={{
            color: 'text.primary',
            fontFamily: 'Raleway, sans-serif',
            fontWeight: '700',
            fontSize: '26px',
            letterSpacing: '0.03em',
          }}
        >
          <span className={css.titleBlue}>Web</span>Studio
        </Typography>
      </Link>
      <MenuList
        sx={{
          marginTop: '3.5vh',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '400',
          fontSize: '18px',
          letterSpacing: '0.02em',
          padding: '0',
          display: 'flex',
          flexDirection: 'row',
          gap: '5vh',
          bgcolor: 'background.default',
        }}
      >
        <li>
          <Link to="/studio" className={css.link}>
            <Typography
              sx={{
                color: 'text.primary',
                padding: '0 0 3.1vh 0',
                cursor: 'pointer',
                '&:hover': {
                  color: '#2196F3',
                },
                '&:focus-visible': {
                  borderBottom: '5px solid #2196F3',
                },
                '&:active': {
                  borderBottom: '5px solid #2196F3',
                },
              }}
            >
              Studio
            </Typography>
          </Link>
        </li>
        <li>
          <Link to="/portofolio" className={css.link}>
            <Typography
              sx={{
                color: 'text.primary',
                padding: '0 0 3.1vh 0',
                cursor: 'pointer',
                '&:hover': {
                  color: '#2196F3',
                },
                '&:focus-visible': {
                  borderBottom: '5px solid #2196F3',
                },
                '&:active': {
                  borderBottom: '5px solid #2196F3',
                },
              }}
            >
              Portofolio
            </Typography>
          </Link>
        </li>
        <li>
          <a href="#footer" onClick={handleClickContact} className={css.link}>
            <Typography
              sx={{
                color: 'text.primary',
                padding: '0 0 3.1vh 0',
                cursor: 'pointer',
                '&:hover': {
                  color: '#2196F3',
                },
                '&:focus-visible': {
                  borderBottom: '5px solid #2196F3',
                },
                '&:active': {
                  borderBottom: '5px solid #2196F3',
                },
              }}
            >
              Contacts
            </Typography>
          </a>
        </li>
      </MenuList>
      <div>
        <ThemeSwitch onToggle={toggleDarkMode} />
      </div>
      <MenuList
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <li sx={{ padding: '0px' }}>
          <Link
            to="https://mail.google.com/mail/u/0/#inbox"
            className={css.link}
          >
            <Typography
              sx={{
                color: 'text.primary',
                padding: '0',
                cursor: 'pointer',
                '&:hover': {
                  color: '#2196F3',
                },
              }}
            >
              info@devstudio.com
            </Typography>
          </Link>
        </li>
        <li sx={{ padding: '0px' }}>
          <Link to="tel:9051290512" className={css.link}>
            <Typography
              sx={{
                color: 'text.primary',
                padding: '0',
                cursor: 'pointer',
                '&:hover': {
                  color: '#2196F3',
                },
              }}
            >
              +1 212-772-4150
            </Typography>
          </Link>
        </li>
      </MenuList>
    </Box>
  );
});
