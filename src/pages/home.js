import Carousel from 'components/Carousel';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import Newsletter from 'components/Newsletter';
import PerformanceBar from 'components/PerformanceBar';
import ProgramsBar from 'components/ProgramsBar';
import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

function Home() {
  useEffect(() => {
    document.title = 'UCLA Chinese Music';
  }, []);
  return (
    <Box>
      <NavBar />
      <Carousel />
      <ProgramsBar />
      <PerformanceBar />
      <Newsletter />
      <Footer />
    </Box>
  );
}

export default Home;
