import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import ProgramInfo from 'components/ProgramInfo';
import React, { useEffect } from 'react';
import StudentDirectory from 'components/StudentDirectory';
import { Box, Divider } from '@chakra-ui/react';

function About() {
  useEffect(() => {
    document.title = 'About | UCLA Chinese Music';
  }, []);
  return (
    <Box bgColor="black">
      <NavBar />
      <ProgramInfo />
      <Divider
        borderColor="gray.100"
        borderWidth="2px"
        my="48px"
        bgColor="black"
        mx="auto"
        width="80%"
      />
      <Box id="student-leadership">
        <StudentDirectory />
      </Box>
      <Footer />
    </Box>
  );
}

export default About;
