import React from 'react';
import css from './Footer.module.css';
import {
  Box,
  MenuList,
  Container,
  Fab,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useTheme } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';

export const Footer = () => {
  const theme = useTheme();
  return (
    <Container
      id="footer"
      maxWidth="100%"
      sx={{
        display: 'flex',
        height: '35vh',
        gap: '20vh',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: theme.palette.mode === 'light' ? '#2F303A' : '#121212',
      }}
      disableGutters
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0',
        }}
      >
        <Link to="*" className={css.link}>
          <Typography
            sx={{
              color: 'white',
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
            fontFamily: 'Roboto',
            fontWeight: '400',
            letterSpacing: '0.03em',
            textAlign: 'left',
            padding: '0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '1vh',
            color: ' #ffffff',
            cursor: 'pointer',
          }}
        >
          <li sx={{ padding: '0px' }}>
            <Link
              target="_blank"
              to="https://www.google.com/maps"
              className={css.link}
            >
              <Typography
                sx={{
                  fontSize: 'inherit',
                  padding: '0',
                  color: '#FFFFFF4D',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'white',
                  },
                }}
              >
                695 Park Ave, NY 10065, USA
              </Typography>
            </Link>
          </li>
          <li sx={{ padding: '0px' }}>
            <Link
              target="_blank"
              className={css.link}
              to="https://mail.google.com/mail/u/0/#inbox"
              sx={{
                textDecoration: 'none',
                padding: '0',
                color: '#FFFFFF4D',
                cursor: 'pointer',
              }}
            >
              <Typography
                sx={{
                  fontSize: 'inherit',
                  padding: '0',
                  color: '#FFFFFF4D',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'white',
                  },
                }}
              >
                info@devstudio.com
              </Typography>
            </Link>
          </li>
          <li sx={{ padding: '0px' }}>
            <Link
              target="_blank"
              className={css.link}
              to="tel:9051290512"
              sx={{
                textDecoration: 'none',
                padding: '0 0 2.5vh 0',
                color: '#FFFFFF4D',
                cursor: 'pointer',
              }}
            >
              <Typography
                sx={{
                  fontSize: 'inherit',
                  padding: '0',
                  color: '#FFFFFF4D',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'white',
                  },
                }}
              >
                +1 212-772-4150
              </Typography>
            </Link>
          </li>
        </MenuList>
      </Box>
      <Box sx={{ color: '#FFFFFF' }}>
        <h2>FIND US ON</h2>
        <MenuList className={css.mediaList}>
          <Fab
            size="small"
            className={css.mediaBtn}
            sx={{
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <InstagramIcon fontSize="small" />
          </Fab>
          <Fab
            size="small"
            className={css.mediaBtn}
            sx={{
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <TwitterIcon fontSize="small" />
          </Fab>

          <Fab
            size="small"
            className={css.mediaBtn}
            sx={{
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <FacebookRoundedIcon fontSize="small" />
          </Fab>

          <Fab
            size="small"
            className={css.mediaBtn}
            sx={{
              '&:hover': {
                bgcolor: '#2196F3',
                color: '#FFFFFF',
              },
            }}
          >
            <LinkedInIcon fontSize="small" />
          </Fab>
        </MenuList>
      </Box>
      <Box sx={{ color: '#FFFFFF' }}>
        <h2>SUBSCRIBE TO THE NEWSLETTER </h2>
        <Box className={css.subscribeForm}>
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            size="small"
            sx={{
              width: '50vh',
              height: '6vh',
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: '#FFFFFF4D',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: 'white',
                  color: '#FFFFFF4D',
                },
              '& .MuiInputLabel-root': {
                color: '#FFFFFF4D',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'white',
              },
            }}
          />

          <Button
            className={css.Btn}
            sx={{
              fontFamily: 'Roboto',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '30px',
              letterSpacing: '0.06em',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              textTransform: 'none',
              bgcolor: '#2196F3',
              width: '200px',
              height: '50px',
              borderRadius: '4px',
              color: ' hsla(0, 0%, 100%, 1)',
              padding: '0',

              '&:hover': {
                bgcolor: '#188CE8',
                cursor: 'pointer',
              },
            }}
          >
            Subscribe <TelegramIcon sx={{ marginLeft: '2vh' }} />
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            fontStyle: 'italic',
            fontSize: 'small',
            color: '#FFFFFF4D',
          }}
        >
          <CopyrightIcon />
          <p>Anisoara C.</p>
        </Box>
      </Box>
    </Container>
  );
};
