import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Button } from '@mui/material';
import css from '../Hero/Hero.module.css';
import { ModalForm } from 'components/Modal/Modal';

export const Hero = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Container maxWidth="100%" disableGutters>
      <Box
        className={css.BgImg}
        padding="0"
        sx={{
          height: '80vh',
        }}
      >
        <Typography
          className={css.heroTitle}
          sx={{
            fontFamily: 'Roboto',
            fontSize: '44px',
            fontWeight: 900,
            lineHeight: '60px',
            letterSpacing: '0.06em',
            textAlign: 'center',
            textTransform: 'none',
            padding: '0 2vh',
            color: ' hsla(0, 0%, 100%, 1)',
            '@media screen and (max-width: 850px)': {
              fontSize: '36px',
            },
            '@media screen and (max-width: 600px)': {
              fontSize: '26px',
            },
          }}
        >
          EFFECTIVE SOLUTIONS FOR <br />
          YOUR BUSINESS
        </Typography>
        <Button
          onClick={handleOpen}
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
            flexDirection: 'column',
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
          Request our service
        </Button>
        <ModalForm open={open} handleClose={() => setOpen(false)} />
      </Box>
    </Container>
  );
};
