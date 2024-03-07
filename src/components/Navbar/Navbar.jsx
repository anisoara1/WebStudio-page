import React, { forwardRef, useEffect } from 'react';
import css from './Navbar.module.css';
import { Box, MenuList, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
import ThemeSwitch from 'components/ThemeSwich';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileModal } from 'components/MobileMenu/MobileMenu';

export const Header = forwardRef(({ toggleDarkMode }, ref) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
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
  const theme = useTheme();
  const borderShadow =
    theme.palette.mode === 'light'
      ? 'rgba(33,33,33,0.3)'
      : 'rgba(255,255,255,0.3)';
  return (
    <Box
      ref={ref}
      sx={{
        height: '80px',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderBottom: `2px solid ${borderShadow}`,
      }}
      className={css.navbar}
    >
      <Link to="/studio" className={css.link}>
        <Typography
          className={css.title}
          sx={{
            color: 'text.primary',
            fontFamily: 'Raleway, sans-serif',
            fontWeight: '700',
            fontSize: '26px',
            letterSpacing: '0.03em',
            '@media screen and (max-width: 850px)': {
              marginLeft: '2vh',
              fontSize: '24px',
            },
          }}
        >
          <span className={css.titleBlue}>Web</span>Studio
        </Typography>
      </Link>
      <MenuList
        sx={{
          marginTop: '4.5vh',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: '400',
          fontSize: '18px',
          letterSpacing: '0.02em',
          padding: '0',
          display: 'flex',
          flexDirection: 'row',
          gap: '40px',
          bgcolor: 'background.default',
          '@media screen and (max-width: 600px)': {
            display: 'none',
          },
        }}
      >
        <li>
          <Link to="/studio" className={css.link}>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: '14px',
                lineHeight: '16px',
                letterSpacing: '0.02em',
                color: 'text.primary',
                padding: '0 0 34px 0',
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
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: '14px',
                lineHeight: '16px',
                letterSpacing: '0.02em',
                color: 'text.primary',
                padding: '0 0 34px 0',
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
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: '14px',
                lineHeight: '16px',
                letterSpacing: '0.02em',
                color: 'text.primary',
                padding: '0 0 34px 0',
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
        className={css.contactList}
        sx={{
          padding: '0',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '20px',
          bgcolor: 'background.default',
          color: 'text.primary',
          '@media screen and (max-width: 850px)': {
            flexWrap: 'wrap',
            '@media screen and (max-width: 600px)': {
              display: 'none',
            },
          },
        }}
      >
        <li sx={{ padding: '0px' }}>
          <Link
            target="_blank"
            to="https://mail.google.com/mail/u/0/#inbox"
            className={css.link}
          >
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '16px',
                letterSpacing: '0.02em',
                color: 'text.primary',
                padding: '0',
                cursor: 'pointer',
                '&:hover': {
                  color: '#2196F3',
                },
                '@media screen and (max-width: 768px)': {
                  fontSize: '12px',
                  marginRight: '0',
                },
              }}
            >
              info@devstudio.com
            </Typography>
          </Link>
        </li>
        <li sx={{ padding: '0px' }}>
          <Link target="_blank" to="tel:9051290512" className={css.link}>
            <Typography
              sx={{
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: '14px',
                lineHeight: '16px',
                letterSpacing: '0.02em',
                color: 'text.primary',
                padding: '0',
                cursor: 'pointer',
                '&:hover': {
                  color: '#2196F3',
                },
                '@media screen and (max-width: 768px)': {
                  fontSize: '12px',
                },
              }}
            >
              +1 212-772-4150
            </Typography>
          </Link>
        </li>
      </MenuList>
      <MenuIcon
        onClick={handleOpen}
        sx={{
          display: 'block',
          '&:hover': {
            color: '#2196F3',
            cursor: 'pointer',
          },
          '@media screen and (min-width: 601px)': {
            display: 'none',
          },
        }}
      />
      <MobileModal open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
});
