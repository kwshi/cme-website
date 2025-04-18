import Footer from 'components/Footer';
import InstrumentCatalog from 'components/InstrumentCatalog';
import InstrumentsBanner from 'components/InstrumentsBanner';
import NavBar from 'components/NavBar';
import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
// import PerformanceCarousel from 'components/PerformanceCarousel';
// import PastPerformance from 'components/PastPerformance';

function Instruments() {
  useEffect(() => {
    document.title = 'Instruments | UCLA Chinese Music';
  }, []);
  return (
    <Box>
      <NavBar />
      <InstrumentsBanner />
      <InstrumentCatalog />
      <Footer />
    </Box>
  );
}

export default Instruments;
