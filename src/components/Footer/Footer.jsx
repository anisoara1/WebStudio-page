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
        padding: '8vh 2vh 0 2vh',
        display: 'flex',
        height: '35vh',
        gap: '40px',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        bgcolor: theme.palette.mode === 'light' ? '#2F303A' : '#121212',
        '@media screen and (max-width: 1200px)': {
          gap: '40px',
        },
        '@media screen and (max-width: 1100px)': {
          flexWrap: 'wrap',
          height: '540px',
          alignContent: 'center',
          justifyContent: 'space-around',
          gap: '65px',
        },
        '@media screen and (max-width: 600px)': {
          gap: '40px',
          height: '590px',
        },
        '@media screen and (max-width: 450px)': {
          gap: '30px',
          height: '620px',
        },
      }}
      disableGutters
    >
      <Box
        sx={{
          marginTop: '-5px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '20px',
          padding: '0',
          '@media screen and (max-width:850px)': {
            alignItems: 'center',
            gap: '2vh',
          },
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
            '@media screen and (max-width: 850px)': {
              alignItems: 'center',
            },
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
                  fontFamily: 'Roboto',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '28px',
                  letterSpacing: '0.03em',
                  textAlign: 'left',
                  padding: '0',
                  color: '#FFFFFF4D',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'white',
                  },
                  '@media screen and (max-width: 600px)': {
                    fontSize: '14px',
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
                  fontFamily: 'Roboto',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '28px',
                  letterSpacing: '0.03em',
                  textAlign: 'left',
                  padding: '0',
                  color: '#FFFFFF4D',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'white',
                  },
                  '@media screen and (max-width: 600px)': {
                    fontSize: '14px',
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
                  fontFamily: 'Roboto',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '28px',
                  letterSpacing: '0.03em',
                  textAlign: 'left',
                  padding: '0',
                  color: '#FFFFFF4D',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'white',
                  },
                  '@media screen and (max-width: 600px)': {
                    fontSize: '14px',
                  },
                }}
              >
                +1 212-772-4150
              </Typography>
            </Link>
          </li>
        </MenuList>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          color: '#FFFFFF',
          '@media screen and (max-width: 850px)': {
            alignItems: 'center',
            gap: '1.5vh',
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '16px',
            letterSpacing: '0.03em',
            textAlign: 'center',
            '@media screen and (max-width: 850px)': {
              margin: '0',
            },
          }}
        >
          FIND US ON
        </Typography>
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
      <Box className={css.subscribeBox} sx={{ color: '#FFFFFF' }}>
        <Typography
          sx={{
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '16px',
            letterSpacing: '0.03em',
            textAlign: 'center',
          }}
        >
          SUBSCRIBE TO THE NEWSLETTER
        </Typography>
        <Box
          className={css.subscribeForm}
          sx={{
            '@media screen and (max-width: 850px)': {
              alignItems: 'center',
            },
          }}
        >
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            size="small"
            sx={{
              width: '50vh',
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: '#FFFFFF4D',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                {
                  borderColor: 'white',
                  color: '#FFFFFF4D',
                },
              '& .MuiInputLabel-root': {
                fontFamily: 'Roboto',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '28px',
                letterSpacing: '0.03em',
                color: '#FFFFFF4D',
                '@media screen and (max-width: 600px)': {
                  fontSize: '14px',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'white',
              },
              '@media screen and (max-width: 850px)': {
                width: '500px',
              },
              '@media screen and (max-width: 600px)': {
                width: '390px',
              },
              '@media screen and (max-width: 450px)': {
                width: '290px',
              },
            }}
          />

          <Button
            className={css.Btn}
            sx={{
              marginTop: '-3px',
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
            Subscribe
            <Link target={'_blank'} to="https://web.telegram.org/k/">
              <TelegramIcon sx={{ margin: '1.5vh 0  0 2vh', color: 'white' }} />
            </Link>
          </Button>
        </Box>
        <Box
          sx={{
            marginTop: '-15px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            fontStyle: 'italic',
            fontSize: 'smaller',
            color: '#FFFFFF4D',
          }}
        >
          <p>Copyright</p>
          <CopyrightIcon fontSize="smaller" />
          <p>Anisoara C.</p>
        </Box>
      </Box>
    </Container>
  );
};
