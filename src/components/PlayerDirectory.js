import PlayerCard from './PlayerCard';
import {
  Box,
  Button,
  Flex,
  Grid,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
// import Link from 'next/link'
import React, { useState } from 'react';

const PlayerDirectory = ({ players }) => {
  const [currentFilter, setCurrentFilter] = useState(0);
  const [displayPlayers, setDisplayPlayers] = useState(players);

  const selectFilter = (index) => {
    console.log('INDEX: ' + index);
    setCurrentFilter(index);
    filterPlayers(filterOptions[index].filter);
  };

  const filterPlayers = (status) => {
    setDisplayPlayers(
      players.filter((player) => {
        if (status === 'Alumni') {
          return player.year === 'Alumna';
        } else if (status !== 'All') {
          return player.year !== 'Alumna';
        }
        return true;
      }),
    );
  };

  const filterOptions = [
    {
      filter: 'All',
    },
    {
      filter: 'Current',
    },
    {
      filter: 'Alumni',
    },
  ];

  return (
    <Box
      width="full"
      height={`${(displayPlayers.length / 3) * 300 + 500}px`}
      paddingTop="50px"
      paddingBottom="50px"
      paddingLeft={{ base: '5%', md: '10%' }}
      paddingRight={{ base: '5%', md: '10%' }}
      bg={useColorModeValue('white', 'black')}
    >
      <Text fontWeight="bold" fontSize="40px" mb="8px">
        Our Performers
      </Text>
      <Flex direction="row" wrap="wrap" justifyContent="left" width="full">
        {filterOptions.map((option, index) => (
          <Button
            width={{ base: '26%', md: '200px' }}
            height="50px"
            key={index}
            m={2}
            onClick={() => selectFilter(index)}
            border={currentFilter === index ? '2px solid white' : 'none'}
            color={currentFilter === index ? 'white' : 'gray'}
          >
            {filterOptions[index].filter}
          </Button>
        ))}
      </Flex>

      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={10}
        width="full"
        marginTop={{ base: '20px', md: '50px' }}
        justifyItems="center"
      >
        {/* {displayPlayers.map((p, idx) => (
            <PlayerCard player={p} key={idx}/>
          ))} */}
        {displayPlayers.map((p, idx) => (
          <Box key={idx} textAlign="center">
            <Image
              src={p.profile}
              alt={p.name}
              borderRadius="full"
              boxSize={{ base: '150px', md: '300px' }}
              objectFit="cover"
              mb="4px"
            />
            <Text fontWeight="extrabold" fontSize="24px">
              {p.name}
            </Text>
            <Text fontWeight="medium" fontSize="18px">
              {p.major}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default PlayerDirectory;
