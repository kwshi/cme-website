import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useRef } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import {
  Box,
  Button,
  // Container,
  Flex,
  // Heading,
  Icon,
  IconButton,
  Image,
  // Stack,
  Text,
  useBreakpointValue,
  // useColorMode,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  MdAccessTime,
  MdAttachMoney,
  MdEvent,
  MdLocationOn,
} from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Slider from 'react-slick';

// const settings = {
//   arrows: false,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   dots: true,
//   fade: false,
//   infinite: true,
//   slidesToScroll: 1,
//   slidesToShow: 1,
//   speed: 1000,
//   adaptiveHeight: true,
// };

export default function PerformanceCarousel({ autoScroll = true }) {
  // const [slider, setSlider] = useState(null);
  // const { colorMode } = useColorMode();
  const swiperRef = useRef(null);

  const containerHeight = useBreakpointValue({ base: '85%', md: '50%' });
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });
  const iconSize = useBreakpointValue({ base: 8, md: 12 });

  const cards = [
    {
      date: 'Saturday, 18 May 2024',
      description:
        'Join for a wonderful night at UCLA Music School and get to know more about traditional Chinese Music! We will be featuring a qin unison, a zheng unison, a kun opera aria, and silk & bamboo music.',
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1727073619/cme_perf_1_hbgphp.png',
      link: '',
      location: 'Schoenberg Hall',
      price: 'Free',
      time: '7:00 PM - 9:00 PM',
      title: 'Fall 2024 Music of China Concert',
    },
  ];

  // useEffect(() => {
  //   if (autoScroll && slider) {
  //     const intervalId = setInterval(() => {
  //       slider.slickNext();
  //     }, settings.autoplaySpeed);

  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }
  // }, [autoScroll, slider]);

  return (
    <Box
      position="relative"
      height={containerHeight}
      width="full"
      overflow="hidden"
      bg="black"
      py={{ base: 4, md: 0 }}
    >
      <Text
        paddingLeft={{ base: '5%', md: '10%' }}
        textAlign={{ base: 'center', md: 'left' }}
        fontWeight="Bold"
        fontSize={{ base: '3xl', md: '40px' }}
        mb={{ base: 4, md: 0 }}
      >
        Upcoming Performances
      </Text>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={false}
        pagination={{ clicakble: true }}
        autoplay={
          autoScroll ? { delay: 5000, disableOnInteraction: false } : false
        }
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={{ height: '100%' }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Box
              w="full"
              display="flex"
              flexDirection={{ base: 'column', md: 'row' }}
              alignItems="center"
              gap={8}
              px={8}
              boxsizing="border-box"
            >
              <Flex
                w={{ base: '100%', md: '50%' }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexShrink={0}
                mb={{ base: 4, md: 0 }}
              >
                <Image
                  src={card.image}
                  alt={card.title || 'Event image'}
                  objectFit="contain"
                  maxW="100%"
                  maxH="100%"
                />
              </Flex>
              <Flex
                w={{ base: '100%', md: '40%' }}
                display="flex"
                justifyContent="flex-start"
                flexDir="column"
                alignItems="center"
              >
                <Text
                  fontSize={{ base: '2xl', md: '40px' }}
                  fontWeight="bold"
                  textAlign="center"
                  textDecoration="underline"
                  sx={{
                    textDecorationThickness: '2px',
                    textUnderlineOffset: '8px',
                  }}
                >
                  {card.title}
                </Text>

                <Flex
                  direction="row"
                  justifyContent="space-around"
                  alignItems="center"
                  height="35%"
                  width="95%"
                  p="13"
                  flexWrap={{ base: 'wrap', md: 'nowrap' }}
                >
                  <Flex
                    direction="column"
                    width={{ base: '100%', md: '55%' }}
                    justifyContent="center"
                    alignItems="flex-start"
                    gap="4"
                    mb={{ base: 4, md: 0 }}
                  >
                    <Flex
                      direction="row"
                      height="50%"
                      alignItems="center"
                      justifyContent="center"
                      mb={{ base: 2, md: 0 }}
                    >
                      <Icon
                        as={MdEvent}
                        mr="2"
                        w={{ base: 6, md: 8 }}
                        h={{ base: 6, md: 8 }}
                      />
                      <Text fontSize="16px">{card.date}</Text>
                    </Flex>
                    <Flex
                      direction="row"
                      height="50%"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon
                        as={MdAccessTime}
                        mr="2"
                        w={{ base: 6, md: 8 }}
                        h={{ base: 6, md: 8 }}
                      />
                      <Text fontSize="16px">{card.time}</Text>
                    </Flex>
                  </Flex>

                  <Flex
                    direction="column"
                    width={{ base: '100%', md: '45%' }}
                    justifyContent="center"
                    alignItems="flex-start"
                    gap="4"
                    mb={{ base: 2, md: 0 }}
                  >
                    <Flex
                      direction="row"
                      height="50%"
                      alignItems="center"
                      justifyContent="center"
                      mb={{ base: 2, md: 0 }}
                    >
                      <Icon
                        as={MdLocationOn}
                        mr="2"
                        w={{ base: 6, md: 8 }}
                        h={{ base: 6, md: 8 }}
                      />
                      <Text fontSize="16px">{card.location}</Text>
                    </Flex>
                    <Flex
                      direction="row"
                      height="50%"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon
                        as={MdAttachMoney}
                        mr="2"
                        w={{ base: 6, md: 8 }}
                        h={{ base: 6, md: 8 }}
                      />
                      <Text fontSize="16px">{card.price}</Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Text
                  alignItems="center"
                  fontSize={{ base: 'md', md: '20px' }}
                  fontWeight="light"
                  width="90%"
                >
                  {card.description}
                </Text>

                {/* <Flex justifyContent="center" alignItems="center" mt={4} gap={4}> 
                        <IconButton
                          icon={<ChevronLeftIcon boxSize={iconSize} />}
                          variant="ghost"
                          onClick={() => swiperRef.current?.slidePrev()}
                          _hover={{ bg: 'transparent' }}
                          aria-label="Previous Slide" // Accessibility
                        />
                        <IconButton
                          icon={<ChevronRightIcon boxSize={iconSize} />}
                          variant="ghost"
                          onClick={() => swiperRef.current?.slideNext()}
                          _hover={{ bg: 'transparent' }}
                          aria-label="Next Slide" // Accessibility
                        />
                      </Flex> */}

                <Button
                  marginTop={{ base: '20px', md: '25px' }}
                  marginLeft={{ base: 0, md: '5%' }}
                  padding={{ base: '16px', md: '20px' }}
                  width={{ base: 'auto', md: '240px' }}
                  bg="red.500"
                  alignSelf={{ base: 'center', md: 'flex-start' }}
                >
                  Register Now!
                </Button>
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
