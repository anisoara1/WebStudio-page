import React, { useEffect } from 'react';
import css from '../MobileMenu/MobileMenu.module.css';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import { Link } from 'react-router-dom';
import { Typography, Box, Button, Modal, Fade, MenuList } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export const MobileModal = ({ open, handleClose }) => {
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
    <div>
      <Modal
        position="relative"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box
            className={css.mobileMenu}
            sx={{
              background: '#FFFFFF',
            }}
          >
            <Button
              onClick={handleClose}
              className={css.btn}
              sx={{
                minWidth: '20px',
                height: '28px',
                padding: '0 4px',
                borderRadius: ' 50%',
                border: '1px solid #bdbdbd',
                position: 'absolute',
                top: '6px',
                right: '6px',
                color: ' #bdbdbd',
                '&:hover': {
                  cursor: 'pointer',
                  color: '#2196f3',
                },
              }}
            >
              <CloseRoundedIcon sx={{ width: '18px' }} />
            </Button>
            <MenuList className={css.navList}>
              <li onClick={handleClose}>
                <Link to="/studio" className={css.link}>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontSize: '40px',
                      fontWeight: '500',
                      lineHeight: '47px',
                      cursor: 'pointer',
                      color: '#212121',
                      '@media screen and (max-width: 450px)': {
                        fontSize: '20px',
                      },
                      '&:hover': {
                        color: '#2196F3',
                      },
                    }}
                  >
                    Studio
                  </Typography>
                </Link>
              </li>
              <li onClick={handleClose}>
                <Link to="/portofolio" className={css.link}>
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontSize: '40px',
                      fontWeight: '500',
                      lineHeight: '47px',
                      cursor: 'pointer',
                      color: '#212121',
                      '@media screen and (max-width: 450px)': {
                        fontSize: '20px',
                      },
                      '&:hover': {
                        color: '#2196F3',
                      },
                    }}
                  >
                    Portofolio
                  </Typography>
                </Link>
              </li>
              <li onClick={handleClose}>
                <Link
                  to="#footer"
                  onClick={handleClickContact}
                  className={css.link}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Roboto',
                      fontSize: '40px',
                      fontWeight: '500',
                      lineHeight: '47px',
                      cursor: 'pointer',
                      color: '#212121',
                      '@media screen and (max-width: 450px)': {
                        fontSize: '20px',
                      },
                      '&:hover': {
                        color: '#2196F3',
                      },
                    }}
                  >
                    Contacts
                  </Typography>
                </Link>
              </li>
            </MenuList>
            <Box className={css.bottomBox}>
              <MenuList
                sx={{
                  fontFamily: 'Roboto',
                  padding: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '10px',
                  color: '#212121',
                }}
              >
                <li sx={{ padding: '0px' }}>
                  <Link
                    target="_blank"
                    to="tel:9051290512"
                    className={css.link}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'Roboto',
                        fontWeight: '500',
                        fontSize: '34px',
                        lineHeight: '40px',
                        letterSpacing: '0.02em',
                        color: '#212121',
                        padding: '0',
                        cursor: 'pointer',
                        '@media screen and (max-width: 450px)': {
                          fontSize: '18px',
                        },
                        '&:hover': {
                          color: '#2196F3',
                        },
                      }}
                    >
                      +1 212-772-4150
                    </Typography>
                  </Link>
                </li>
                <li sx={{ padding: '0px' }}>
                  <Link
                    target="_blank"
                    to="https://mail.google.com/mail/u/0/#inbox"
                    className={css.link}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'Roboto',
                        fontSize: '24px',
                        fontWeight: '500',
                        lineHeight: '28px',
                        letterSpacing: '0.02em',
                        color: '#212121',
                        padding: '0',
                        cursor: 'pointer',
                        '@media screen and (max-width: 450px)': {
                          fontSize: '16px',
                        },
                        '&:hover': {
                          color: '#2196F3',
                        },
                      }}
                    >
                      info@devstudio.com
                    </Typography>
                  </Link>
                </li>
              </MenuList>
              <MenuList className={css.mediaList}>
                <li className={css.mediaList}>
                  <Typography
                    sx={{
                      color: '#2196f3',
                      fontFamily: 'Roboto',
                      fontSize: ' 18px',
                      fontWeight: '500',
                      lineHeight: '22px',
                      letterSpacing: '0.02em',
                      textAlign: 'left',
                      '@media screen and (max-width: 450px)': {
                        fontSize: '14px',
                      },
                    }}
                  >
                    Instagram
                  </Typography>
                  <HorizontalRuleRoundedIcon
                    sx={{
                      fontSize: 'small',
                      transform: 'rotate(90deg)',
                      color: '#21212133',
                    }}
                  />
                </li>
                <li className={css.mediaList}>
                  <Typography
                    sx={{
                      color: '#2196f3',
                      fontFamily: 'Roboto',
                      fontSize: ' 18px',
                      fontWeight: '500',
                      lineHeight: '22px',
                      letterSpacing: '0.02em',
                      textAlign: 'left',
                      '@media screen and (max-width: 450px)': {
                        fontSize: '14px',
                      },
                    }}
                  >
                    Twitter
                  </Typography>
                  <HorizontalRuleRoundedIcon
                    sx={{
                      fontSize: 'small',
                      transform: 'rotate(90deg)',
                      color: '#21212133',
                    }}
                  />
                </li>
                <li className={css.mediaList}>
                  <Typography
                    sx={{
                      color: '#2196f3',
                      fontFamily: 'Roboto',
                      fontSize: ' 18px',
                      fontWeight: '500',
                      lineHeight: '22px',
                      letterSpacing: '0.02em',
                      textAlign: 'left',
                      '@media screen and (max-width: 450px)': {
                        fontSize: '14px',
                      },
                    }}
                  >
                    Facebook
                  </Typography>
                  <HorizontalRuleRoundedIcon
                    sx={{
                      fontSize: 'small',
                      transform: 'rotate(90deg)',
                      color: '#21212133',
                    }}
                  />
                </li>
                <li className={css.mediaList}>
                  <Typography
                    sx={{
                      color: '#2196f3',
                      fontFamily: 'Roboto',
                      fontSize: ' 18px',
                      fontWeight: '500',
                      lineHeight: '22px',
                      letterSpacing: '0.02em',
                      textAlign: 'left',
                      '@media screen and (max-width: 450px)': {
                        fontSize: '14px',
                      },
                    }}
                  >
                    LinkedIn
                  </Typography>
                </li>
              </MenuList>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
