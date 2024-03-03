import * as React from 'react';

import css from '../WhatWeDo/WhatWeDo.module.css';
import { Box, Container, MenuItem, MenuList } from '@mui/material';

export const WhatWeDo = () => {
  return (
    <Container
      maxWidth="100%"
      disableGutters
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        '@media screen and (max-width: 1160px)': {
          display: 'none',
        },
      }}
    >
      <h1 className={css.mainTitle}>What we do</h1>
      <MenuList className={css.menuList}>
        <MenuItem className={css.photoBox} sx={{ padding: '0' }}>
          <Box
            className={css.firstImg}
            sx={{
              cursor: 'initial',
              width: '370px',
              height: '294px',
            }}
          />
          <p className={css.label}>DESKTOP APPS</p>
        </MenuItem>
        <MenuItem className={css.photoBox} sx={{ padding: '0' }}>
          <Box
            className={css.secondImg}
            sx={{
              cursor: 'initial',
              width: '370px',
              height: '294px',
            }}
          />
          <p className={css.label}>MOBILE APPS</p>
        </MenuItem>
        <MenuItem className={css.photoBox} sx={{ padding: '0' }}>
          <Box
            className={css.thirdImg}
            sx={{
              cursor: 'initial',
              width: '370px',
              height: '294px',
            }}
          />
          <p className={css.label}>DESIGN SOLUTIONS</p>
        </MenuItem>
      </MenuList>
    </Container>
  );
};
