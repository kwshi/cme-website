import React from 'react';
import VidBox from './VidBox';
import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useColorModeValue,
  AspectRatio,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

const InstrumentHeader = ({ instrument }) => {
  const getEmbedUrl = (url) => {
    const vidId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${vidId}`;
  };

  return (
    <Box
      width="full"
      height="full"
      paddingBottom={{ base: '10%', md: '0%' }}
      bg={useColorModeValue('white', 'black')}
    >
      <Flex
        width="full"
        flexDirection={{ base: 'column', md: 'row' }}
        height={{ base: 'full', md: '500px' }}
        paddingLeft={{ base: '5%', md: '10%' }}
        paddingRight={{ base: '5%', md: '10%' }}
        gap={5}
        bg={useColorModeValue('white', 'black')}
      >
        <Box
          width={{ base: 'full', md: '40%' }}
          minWidth={{ base: 'auto', md: '400px' }}
          p={{ base: '0px', md: '20px' }}
          marginRight={{ base: '0%', md: '5%' }}
        >
          <Heading
            fontWeight="extrabold"
            mb="4"
            fontSize={{ base: '30px', md: '64px' }}
          >
            {instrument.title}
          </Heading>
          <Text
            fontWeight="normal"
            fontSize={{ base: '16px', md: '18px' }}
            mb="8"
          >
            {instrument.description}
          </Text>
        </Box>

        <Box display={{ base: 'none', md: 'block' }} width="50%" height="500px">
          <VidBox
            videoUrl={getEmbedUrl(instrument.link)}
            instrument={instrument}
          />
        </Box>

        <AspectRatio ratio={16 / 9} display={{ base: 'flex', md: 'none' }}>
          <Box
            as="iframe"
            src={getEmbedUrl(instrument.link)}
            allowFullScreen
            width="90%"
            height="90%"
          />
        </AspectRatio>
      </Flex>
    </Box>
  );
};

export default InstrumentHeader;
