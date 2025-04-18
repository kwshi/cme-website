import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import ProgramBanner from 'components/ProgramBanner';
import ProgramCalendar from 'components/ProgramCalendar';
import ProgramCalendarMobile from 'components/ProgramCalendarMobile';
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box } from '@chakra-ui/react';

function Programs() {
  useEffect(() => {
    document.title = 'Programs | UCLA Chinese Music';
  }, []);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Box>
      <NavBar />
      <ProgramBanner />
      <Box id="course-calendar">
        {isMobile ? <ProgramCalendarMobile /> : <ProgramCalendar />}
      </Box>
      <Footer />
    </Box>
  );
}

export default Programs;
