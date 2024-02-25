import React, { forwardRef } from 'react';
import { Portofolio } from '../components/Portofolio/Portofolio';
import { Footer } from '../components/Footer/Footer';

export const PortofolioPage = forwardRef((props, ref) => {
  return (
    <main>
      <Portofolio />
      <Footer ref={ref} />
      <div id="footer" style={{ visibility: 'hidden' }} />
    </main>
  );
});
