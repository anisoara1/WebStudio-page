import React, { forwardRef } from 'react';
import { Hero } from '../components/Hero/Hero';
import { Features } from '../components/Features/Features';
import { WhatWeDo } from '../components/WhatWeDo/WhatWeDo';
import { OurTeam } from '../components/OurTeam/OurTeam';
import { Customers } from '../components/Cusomers/Customers';
import { Footer } from '../components/Footer/Footer';

export const StudioPage = forwardRef((props, ref) => {
  return (
    <main>
      <Hero />
      <Features />
      <WhatWeDo />
      <OurTeam />
      <Customers />
      <Footer ref={ref} />
      <div id="footer" style={{ visibility: 'hidden' }} />
    </main>
  );
});
