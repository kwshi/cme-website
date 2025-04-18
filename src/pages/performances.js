import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import PastPerformance from 'components/PastPerformance';
import PerformanceBanner from 'components/PerformanceBanner';
import PerformanceCarousel from 'components/PerformanceCarousel';
import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

function Performances() {
  useEffect(() => {
    document.title = 'Performances | UCLA Chinese Music';
  }, []);
  return (
    <Box>
      <NavBar />
      <PerformanceBanner />
      <PerformanceCarousel />
      <Box id="past-performances">
        <PastPerformance />
      </Box>
      <Footer />
    </Box>
  );
}

export default Performances;
