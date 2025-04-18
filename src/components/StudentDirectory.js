import Link from 'next/link';
import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import student_staff from 'data/staff';

const StudentDirectory = () => {
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

  const [currentFilter, setCurrentFilter] = useState(0);
  const [displayStaff, setDisplayStaff] = useState(student_staff);

  const selectFilter = (index) => {
    setCurrentFilter(index);
    filterPlayers(filterOptions[index].filter);
  };

  const filterPlayers = (status) => {
    setDisplayStaff(
      student_staff.filter((staff) => {
        if (status === 'Alumni') {
          return staff.year === 'Alumna';
        } else if (status !== 'All') {
          return staff.year !== 'Alumna';
        }
        return true;
      }),
    );
  };

  return (
    <Box width="full" height="full" bg={useColorModeValue('white', 'black')}>
      <Flex
        direction="column"
        width="full"
        paddingBottom="36px"
        paddingLeft={{ base: '5%', md: '10%' }}
        paddingRight={{ base: '5%', md: '10%' }}
        gap={5}
        bg={useColorModeValue('white', 'black')}
      >
        <Heading fontWeight="bold" fontSize={{ base: '30px', md: '40px' }}>
          Student Leadership
        </Heading>
        <Text fontSize="md">
          The success of the UCLA Chinese Music Ensemble is driven by dedicated
          student leaders who ensure smooth operations and a vibrant presence.
          They secure funding for costs like instrument maintenance and guest
          artist performances, keeping our programs accessible and high-quality.
          Talented students design our programs and posters, reflecting our
          performance essence. The social media team engages the community with
          updates and behind-the-scenes content. Stage managers handle
          logistics, coordinating setups, performers, and technical aspects.
          Producers and associate producers organize rehearsals, schedules, and
          oversee program details, bringing our artistic vision to life. These
          diverse roles make our ensemble thrive, fostering appreciation for
          Chinese music and culture at UCLA and beyond.
        </Text>
      </Flex>

      <Flex
        direction="row"
        wrap="wrap"
        justifyContent="left"
        width="100%"
        paddingLeft={{ base: '3%', md: '10%' }}
      >
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

      <Box
        width={{ base: '90%', md: '80%' }}
        height="auto"
        borderRadius={{ base: '15px', md: '15px' }}
        padding={{ base: '0px', md: '40px' }}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        textAlign="center"
        marginLeft={{ base: '6%', md: '10%' }}
        flexDirection="column"
      >
        {/* <Box width="100%" display="flex" justifyContent="center" mb="25px">
          <Text fontWeight="bold" fontSize="24px" color="gray.100" letterSpacing="2px" mx="auto">
            FALL 2023 | WINTER 2024 | SPRING 2024
          </Text>
        </Box> */}

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
          {displayStaff.map((p, idx) => (
            <Box key={idx} textAlign="center">
              <Image
                src={p.image}
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
                {p.position}
              </Text>
            </Box>
          ))}
        </Grid>

        {/* <Grid
        templateColumns="repeat(3, 1fr)"
        gap={12}
        width="full"
        marginTop={{base: "0px", md: "20px"}}
        justifyItems="center"
        >
          {student_staff.map((student, idx) => (
            <Box key={idx} textAlign="center">
                <Image
                src={student.image}
                alt={student.name}
                borderRadius="full"
                boxSize={{base: "150px", md: "300px"}}
                objectFit="cover"
                mb="4px"
                // _hover={{ transform: 'scale(1.05)' }}
                />
              <Text fontWeight="extrabold" fontSize="24px">{student.name}</Text>
              <Text fontWeight="medium" fontSize="18px">{student.position}</Text>
            </Box>
          ))}
        </Grid> */}
      </Box>
    </Box>
  );
};

export default StudentDirectory;
