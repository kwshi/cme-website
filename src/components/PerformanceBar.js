import PerformanceCard from './PerformanceCard';
import React from 'react';
import {
  // Avatar,
  Box,
  // Button,
  // Center,
  // Collapse,
  Flex,
  Heading,
  // Icon,
  // IconButton,
  // Link,
  // Menu,
  // MenuButton,
  // MenuDivider,
  // MenuItem,
  // MenuList,
  // Popover,
  // PopoverContent,
  // PopoverTrigger,
  // Stack,
  // Text,
  // useBreakpointValue,
  // useColorMode,
  useColorModeValue,
  // useDisclosure,
} from '@chakra-ui/react';

const PerformanceBar = () => {
  const performance_items = [
    {
      date: 'Sat, 8 March 2025',
      image_url:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1725497285/cme_spring_festival_qtkwft.png',
      location: 'Schoenberg Hall',
      price: 'Free',
      time: '5:00 PM',
      title: 'Music of China Winter 2025 Concert',
      link: 'https://schoolofmusic.ucla.edu/event/music-of-china-winter-concert-2025/',
    },
    {
      date: 'Sat, 3 May 2025',
      image_url:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1725497285/cme_cacn_jg89uu.png',
      location: 'Royce Hall',
      price: 'Free',
      time: '7:00 PM',
      title: 'Chinese American Culture Night',
      link: 'https://community.ucla.edu/studentorg/5165',
    },
    {
      date: 'Sat, 17 May 2025',
      image_url:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1725494814/cme_program_kunqu_c7jqre.png',
      location: 'Schoenberg Hall',
      price: 'Free',
      time: '7:30 PM',
      title: 'Music of China Spring 2025 Concert',
      link: '',
    },
  ];
  return (
    <>
      <Box
        position="relative"
        height={{ base: 'auto', md: '600px' }}
        width="full"
        overflow="hidden"
        bg={useColorModeValue('white', 'black')}
        paddingBottom={{ base: '30px', md: '0px' }}
      >
        <Flex
          direction="column"
          height="100%"
          width="100%"
          paddingLeft={{ base: '5%', md: '10%' }}
          paddingRight={{ base: '5%', md: '100px' }}
          paddingTop={{ base: '0px', md: '20px' }}
          paddingBottom={{ base: '0px', md: '20px' }}
          gap="30px"
          justifyContent="center"
        >
          <Heading>Upcoming Performances</Heading>
          <Box
            as="section"
            display="flex"
            overflowX="auto"
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
            }}
            gap="20px"
          >
            {performance_items.map((item, ind) => (
              <PerformanceCard
                key={ind}
                image_url={item.image_url}
                title={item.title}
                date={item.date}
                time={item.time}
                location={item.location}
                price={item.price}
                link={item.link}
              />
            ))}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default PerformanceBar;
