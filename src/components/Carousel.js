import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  // IconButton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Stack,
  Text,
  // useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react';

const settings = {
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  fade: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 1000,
};

export default function CaptionCarousel({ autoScroll = true }) {
  const [slider, setSlider] = useState(null);
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // const top = useBreakpointValue({ base: '90%', md: '50%' });
  // const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1726703341/cme_carous_1_ehydyz.png',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1726703341/cme_carous_2_d8wera.png',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1726703341/cme_carous_3_y1sec1.png',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1726703341/cme_carous_4_tcqpvi.png',
      title: 'The UCLA Chinese Music Ensemble',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1726703341/cme_carous_5_msn6zc.png',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1726703341/cme_carous_6_rk7kqr.png',
    },
    {
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1726703342/cme_carous_7_ezq9vk.png',
    },
  ];

  useEffect(() => {
    if (autoScroll && slider) {
      const intervalId = setInterval(() => {
        slider.slickNext();
      }, settings.autoplaySpeed);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [autoScroll, slider]);

  return (
    <Box
      position="relative"
      height="600px"
      width="full"
      overflow="hidden"
      left="0"
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      {/* <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton> */}
      {/* Right Icon */}
      {/* <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton> */}
      {/* Slider */}
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Flex
            key={index}
            direction="column"
            align="start"
            width="full"
            height="full"
          >
            <Box
              height="6xl"
              position="relative"
              backgroundPosition="90% -10%"
              backgroundRepeat="no-repeat"
              backgroundImage={{ base: 'none', md: `url(${card.image})` }}
              backgroundColor="black"
              className="image-box"
              left=""
            >
              <Flex height="full">
                {/* This is the block you need to change, to customize the caption */}
                <Container
                  size={{ base: 'sm', lg: 'lg' }}
                  height="600px"
                  w={{ base: '88%', lg: '50%' }}
                  position="absolute"
                  left={{ base: '6%', md: '10%' }}
                >
                  <Stack
                    w="full"
                    position="absolute"
                    top={{ base: '5%', md: '10%' }}
                    left="0%"
                    spacing={4}
                    p={{ base: 0, md: 4 }}
                  >
                    <Heading
                      fontSize={{ base: '30px', md: '48px' }}
                      width="full"
                      left="0%"
                      textAlign="left"
                    >
                      The Chinese Music Ensemble at UCLA
                    </Heading>
                    <Text
                      fontSize={{ base: '18px', lg: 'lg' }}
                      textAlign="left"
                    >
                      Beginners and experienced musicians are welcome to join
                      the UCLA Chinese Music Ensemble. We offer students the
                      opportunity to explore traditional Chinese music through
                      performance. Directed by Professor Chi Li, the ensemble
                      features a variety of traditional Chinese instruments. We
                      provide a cultural bridge, promoting appreciation and
                      understanding of Chinese musical heritage within the UCLA
                      community and beyond.
                    </Text>

                    <Flex direction="row" height="100%" width="100%" gap="30px">
                      <Button
                        alignItems="center"
                        width="300px"
                        height="50px"
                        bg="red.500"
                        // onClick={onOpen}
                        as="a"
                        href="https://docs.google.com/forms/d/1Cy9lgqgpYJlJLDlNahgoux5wfap7sj7qjx5DykwXDE4"
                      >
                        Join Today
                      </Button>
                      <Button
                        as="a"
                        href="mailto:uclacm.inquiry@gmail.com"
                        alignItems="center"
                        width="300px"
                        height="50px"
                        bg="transparent"
                        border="2px solid"
                        borderColor="red.600"
                        _hover={{ bg: 'red.100', borderColor: 'red.700' }}
                      >
                        Contact Us
                      </Button>

                      <Modal
                        isOpen={isOpen}
                        onClose={onClose}
                        backgroundColor="gray.900"
                        isCentered
                      >
                        <ModalOverlay />
                        <ModalContent
                          borderRadius="lg"
                          p={4}
                          backgroundColor="gray.900"
                        >
                          <ModalHeader>Join Today</ModalHeader>
                          <ModalBody>
                            <Text>Here are the instructions!</Text>
                          </ModalBody>
                          <ModalFooter>
                            <Button backgroundColor="red.500" onClick={onClose}>
                              Close
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                    </Flex>
                  </Stack>
                </Container>
              </Flex>
            </Box>
          </Flex>
        ))}
      </Slider>
      {/* Custom styles for image-box */}
      <style jsx global>
        {`
            .image-box::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: ${
                colorMode === 'light' ? 'rgba(255, 255, 255, 0.2)' : 'none'
              };
            }
          `}
      </style>
    </Box>
  );
}
