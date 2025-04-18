import '../../styles/globals.css';
import '@fontsource/outfit/300.css'; // Outfit Light
import '@fontsource/outfit/400.css'; // Outfit Regular
import '@fontsource/outfit/500.css'; // Outfit Medium
import '@fontsource/outfit/600.css'; // Outfit Semibold
import '@fontsource/outfit/700.css'; // Outfit Bold
import '@fontsource/outfit/800.css'; // Outfit Extra Bold
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
// import Footer from 'components/Footer';

// import chakra ui
import { Box, ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

// sampel theme
const colors = {
  brand: {
    700: '#2a69ac',
    800: '#153e75',
    900: '#1a365d',
  },
  red: {
    500: '#8f0012',
  },
  yellow: {
    500: '#ce8902',
  },
  gray: {
    100: '#434343',
    200: '#272727',
    300: '#171717',
    900: '#1b1b1b',
  },
  white: {
    100: '#fdfdfd',
  },
};

const fonts = {
  heading: 'Outfit, sans-serif',
  body: 'Outfit, sans-serif',
};

const fontWeights = {
  light: 300, // Outfit Light
  normal: 400, // Outfit Regular
  medium: 500,
  semibold: 600,
  bold: 700, // Outfit Bold
  extrabold: 800, // Outfit Extra Bold
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  colors: colors,
  fonts: fonts,
  fontWeights: fontWeights,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box bg="gray.900" minH="100vh">
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
