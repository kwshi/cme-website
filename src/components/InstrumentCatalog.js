import Link from 'next/link';
import React, { useState } from 'react';
import instruments from 'data/instruments';
import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

const InstrumentCatalog = () => {
  const [currentFilter, setCurrentFilter] = useState(0);
  const [displayInstruments, setDisplayInstruments] = useState(instruments);

  const selectFilter = (index) => {
    console.log('INDEX: ' + index);
    setCurrentFilter(index);
    filterInstruments(filterOptions[index].filter);
  };

  const filterInstruments = (tag) => {
    setDisplayInstruments(
      instruments.filter((instrument) => {
        return instrument.tags.includes(tag);
      }),
    );
  };

  const filterOptions = [
    {
      filter: 'All',
    },
    {
      filter: 'Ensemble',
    },
    {
      filter: 'Zheng',
    },
    {
      filter: 'Kunqu Opera',
    },
    {
      filter: 'Qin',
    },
  ];

  return (
    <Box
      width="full"
      height={{
        base: `${(displayInstruments.length / 2) * 270}px`,
        md: `${(displayInstruments.length / 4) * 300 + 500}px`,
      }}
      paddingTop="50px"
      paddingBottom="50px"
      paddingLeft="5%"
      paddingRight="5%"
      bg={useColorModeValue('white', 'black')}
    >
      <Flex
        direction="row"
        wrap={{ base: 'nowrap', lg: 'wrap' }}
        justifyContent="left"
        width="full"
        overflowX={{ base: 'auto', lg: 'visible' }}
        css={{
          '::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar for Webkit browsers
          '-ms-overflow-style': 'none', // Hide scrollbar for IE and Edge
          'scrollbar-width': 'none', // Hide scrollbar for Firefox
        }}
      >
        {filterOptions.map((option, index) => (
          <Button
            width={{ base: '30%', lg: '200px' }}
            height="50px"
            key={index}
            m={2}
            onClick={() => selectFilter(index)}
            border={currentFilter === index ? '2px solid white' : 'none'}
            color={currentFilter === index ? 'white' : 'gray'}
            flexShrink={0}
          >
            {filterOptions[index].filter}
          </Button>
        ))}
      </Flex>

      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={{ base: 0, md: 10 }}
        columnGap={{ base: 5 }}
        gridAutoRows={{ base: '240px', md: '280px' }} // 270 + 10
        width="full"
        marginTop={{ base: '20px', md: '50px' }}
        justifyItems="center"
      >
        {displayInstruments.map((instrument, idx) => (
          <Box
            key={idx}
            justifyContent="center"
            alignContent="center"
            textAlign="center"
            position="relative"
            width={{ base: 'full', md: '270px' }}
            height={{ base: 'full', md: '270px' }}
            role="group"
          >
            <Link href={`/instruments/${instrument.id}`} passHref>
              <Image
                src={instrument.image}
                alt={instrument.name}
                width={{ base: 'full', md: '270px' }}
                height={{ base: 'full', md: '270px' }}
                objectFit={{ base: 'contain', md: 'cover' }}
                mb="4px"
                _hover={{ transform: 'scale(1.01)' }}
                transition="transform 0.3s ease"
              />
              <Box
                position="absolute"
                top="205px"
                left="50%"
                transform="translateX(-50%)"
                color="white.100"
                fontWeight="semibold"
                fontSize="24px"
                padding="4px 8px"
                borderRadius="md"
                _groupHover={{ top: '210px' }}
                transition="top 0.3s ease"
              >
                {instrument.name}
              </Box>
            </Link>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default InstrumentCatalog;
