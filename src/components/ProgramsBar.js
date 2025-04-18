import React, { useState } from 'react';
import { Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  // Avatar,
  Box,
  Button,
  // Center,
  // Collapse,
  Container,
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
  Stack,
  Text,
  // useBreakpointValue,
  // useColorMode,
  useColorModeValue,
  // useDisclosure,
} from '@chakra-ui/react';

const ProgramsBar = () => {
  // const { colorMode } = useColorMode();
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const router = useRouter();

  const selectProgram = (index) => {
    console.log('INDEX: ' + index);
    setCurrentDisplay(index);
  };

  const buttonOptions = [
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1725494814/cme_program_ensemble_w6c5x6.png',
      text: `A Chinese orchestra comprised of over 20 different traditional Chinese instruments, 
                ranging from the bowed erhu and the plucked pipa.`,
      title: 'Ensemble',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1725494814/cme_program_guzheng_udj0rj.png',
      text: `A zheng unison featuring the zheng, or guzheng, an ancient Chinese plucked zither with a rich history.`,
      title: 'Zheng',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1725494814/cme_program_kunqu_c7jqre.png',
      text: `An opera performing one of the oldest extant forms of Chinese opera where students learn the ancient lurical and dances.`,
      title: 'Kunqu Opera',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1725494815/cme_program_guqin_xmht7i.png',
      text: `A qin unison class that offers hands-on practice with the qin, or guqin, the ancient Chinese seven-string zither.`,
      title: 'Qin',
    },
  ];
  return (
    <>
      <Box
        position="relative"
        height={{ base: 'auto', md: '900px' }}
        width="full"
        overflow="hidden"
        bg={useColorModeValue('white', 'black')}
      >
        <Flex
          direction="column"
          height="100%"
          width="100%"
          paddingLeft={{ base: '5%', md: '10%' }}
          paddingRight={{ base: '5%', md: '100px' }}
          paddingTop={{ base: '0px', md: '10px' }}
          paddingBottom="20px"
          gap="30px"
          justifyContent="center"
          spacing={4}
        >
          <Heading>Our Programs</Heading>
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
            {buttonOptions.map((option, index) => (
              <Button
                width={{ base: '30%', lg: '180px' }}
                height="45px"
                key={index}
                m={2}
                onClick={() => selectProgram(index)}
                border={currentDisplay === index ? '2px solid white' : 'none'}
                color={currentDisplay === index ? 'white' : 'gray'}
                flexShrink={0}
              >
                {buttonOptions[index].title}
              </Button>
            ))}
          </Flex>

          <Box
            height="600px"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={{
              base: 'none',
              md: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent), url(${buttonOptions[currentDisplay].image})`,
            }}
            className="image-box"
            mt={4}
          >
            <Container
              size="lg"
              height="800px"
              w={{ base: '100%', lg: '50%' }}
              position={{ base: 'absolute', lg: 'relative' }}
              left={{ base: '0%', lg: '-25%' }}
            >
              <Stack
                w="full"
                position="absolute"
                top="0%"
                left="0%"
                spacing={4}
                p={2}
              >
                <Image
                  src={buttonOptions[currentDisplay]?.image}
                  alt="banner"
                  paddingTop="10px"
                  paddingBottom="20px"
                  display={{ base: 'block', md: 'none' }}
                />
                <Heading
                  fontSize={{ base: '20px', lg: '40px' }}
                  fontWeight="bold"
                  letterSpacing={{ base: '5px', md: '10px' }}
                  width="full"
                  left="0%"
                  textAlign="left"
                >
                  {buttonOptions[currentDisplay].title.toUpperCase()}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} textAlign="left">
                  {buttonOptions[currentDisplay].text}
                </Text>
                <Button
                  alignItems="center"
                  width={{ base: 'full', md: '200px' }}
                  height="50px"
                  bg="red.500"
                  onClick={() => router.push(`/programs?tab=${currentDisplay}`)}
                >
                  Learn More
                </Button>
              </Stack>
            </Container>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ProgramsBar;
