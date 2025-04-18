import Link from 'next/link';
import React from 'react';
import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const PastPerformance = () => {
  const past_performances = [
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1732951024/springfest_hhvoyp.png',
      link: '',
      name: 'Spring Festival of Music 2024',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1732951024/musicchinaconc24_vey81t.png',
      link: '',
      name: 'Music of China Concert Winter 2024',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1732951024/musicchinaconc23_xx2gni.png',
      link: '',
      name: 'Music of China Concert Fall 2023',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1732951024/fowler_eekwtm.png',
      link: '',
      name: 'Fowler Out Loud: Lunar New Year',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1732951024/cssa_vwkxmf.png',
      link: '',
      name: 'CSSA Chinese New Year',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1732951024/springfest23_jp5nba.png',
      link: '',
      name: 'Spring Festival of Music 2023',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1732951099/concwinter23_myjssp.png',
      link: '',
      name: 'Music of China Winter 2023',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1732951024/concfall22_frdisb.png',
      link: '',
      name: 'Music of China Concert Fall 2023',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1732951024/amnight_h4pkz8.png',
      link: '',
      name: 'Chinese American Culture Night 2023',
    },
  ];

  return (
    <Box width="full" height="full" bg={useColorModeValue('white', 'black')}>
      <Flex
        direction="column"
        width="full"
        paddingTop={{ base: '24px', md: '36px' }}
        paddingBottom={{ base: '24px', md: '36px' }}
        paddingLeft={{ base: '5%', md: '10%' }}
        paddingRight={{ base: '5%', md: '10%' }}
        gap={5}
        bg={useColorModeValue('white', 'black')}
      >
        <Heading
          fontWeight="bold"
          fontSize={{ base: '2xl', md: '40px' }}
          textAlign="center"
        >
          Past Performances
        </Heading>
      </Flex>

      <Grid
        // paddingLeft={{ base: "5%", md: "6%" }}
        paddingBottom={{ base: '50px', md: '200px' }}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap={4}
        width="full"
        marginTop="20px"
        justifyItems="center"
      >
        {past_performances.map((perf, idx) => (
          <Box
            key={idx}
            textAlign="center"
            maxWidth="300px"
            marginBottom={{ base: '20px', md: '0' }}
          >
            <Link href={perf.link} target="_blank">
              <Image
                src={perf.image}
                alt={perf.name}
                height={{ base: '200px', md: '270px' }}
                width="100%"
                objectFit="cover"
                mb="8px"
                _hover={{ transform: 'scale(1.05)' }}
                transition="transform 0.3s ease-in-out"
              />
            </Link>
            <Text
              fontWeight="medium"
              fontSize={{ base: 'md', md: '20px' }}
              paddingTop="5px"
            >
              {perf.name}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default PastPerformance;
