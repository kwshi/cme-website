import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';

const ProgramBanner = () => {
  const [currentDisplay, setCurrentDisplay] = useState(0);
  const router = useRouter();
  const { tab } = router.query;

  useEffect(() => {
    if (tab !== undefined) {
      setCurrentDisplay(parseInt(tab, 10));
    }
  }, [tab]);

  const selectProgram = (index) => {
    console.log('INDEX: ' + index);
    setCurrentDisplay(index);
  };

  const banners = [
    {
      class_time: 'Wednesday: 3-4 PM',
      course_code: 'ETHNMUS 168C',
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1726729889/cme_ensemble_y9qqei.png',
      text: `The beginner and advanced ensemble groups highlight Chinese instrumental music. Featuring more than twenty traditional instruments like the pipa, erhu, and dizi, the ensemble performs classical and folk pieces, offering a rich cultural experience. They present a repertoire that blends ancient and modern styles. Open to students of all levels, the ensemble fosters cultural appreciation through music, bridging traditional Chinese heritage with contemporary influences.  Students are able to select from a variety of instruments to choose from.`,
      title: 'Ensemble',
    },
    {
      class_time: 'Wednesday: 3-4 PM',
      course_code: 'ETHNMUS 168C',
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1726729889/cme_zheng_gvlq4v.png',
      text: `The zheng unison refers to a performance where multiple zheng players perform the same melody or harmonized parts together. This creates a rich, resonant sound that amplifies key moments in the composition. Known for its harp-like tone, the zheng adds depth and warmth to the ensemble. The unison showcases precision and cohesion, as players synchronize techniques to produce a seamless sound, blending the zheng’s distinct timbre with the broader texture of the orchestra.   Eight to twelve students perform pieces together each quarter.`,
      title: 'Zheng',
    },
    {
      class_time: 'Wednesday: 3-4 PM',
      course_code: 'ETHNMUS 168C',
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1726729888/cme_kunqu_kobzuy.png',
      text: `Kunqu Opera is one of the oldest forms of Chinese opera, dating back to the Yuan Dynasty. Known for its elegance, it blends poetry, dance, music, and drama. Performers use refined gestures and stylized singing, accompanied by instruments like the dizi, pipa, and sheng. Stories are often drawn from classical literature, with famous works like The Peony Pavilion. Recognized by UNESCO, Kunqu preserves China's rich cultural heritage through its graceful, artistic performances.   UCLA’s Kunqu Opera allows students to showcase their art in different forms.`,
      title: 'Kunqu Opera',
    },
    {
      class_time: 'Wednesday: 3-4 PM',
      course_code: 'ETHNMUS 168C',
      image:
        'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1725494815/cme_program_guqin_xmht7i.png',
      text: `The qin, also known as the guqin, is a traditional Chinese stringed instrument with a history spanning over 3,000 years. It is a zither with seven strings, played by plucking with the fingers, and is known for its deep, tranquil sound. The qin holds a significant place in Chinese culture, often associated with scholars, poets, and philosophers, and is revered for its expressive qualities. Its music is typically slow and meditative, reflecting the Confucian ideals of harmony and balance. The qin is also noted for its intricate playing techniques and the use of harmonics.`,
      title: 'Qin',
    },
  ];
  return (
    <>
      <Box
        width={{ base: 'auto', md: 'full' }}
        height={{ base: 'auto', md: '600px' }}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundImage={{
          base: 'none',
          md: `linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent), url(${banners[currentDisplay].image})`,
        }}
        backgroundColor="black"
        backgroundSize="cover"
        padding={{ base: '3%', md: '50px' }}
      >
        <Flex
          height={{ base: 'auto', md: '90%' }}
          width="full"
          marginLeft={{ base: '0px', md: '3%' }}
          flexDirection={{ base: 'column', md: 'row' }}
          paddingBottom={{ base: '20px' }}
        >
          <Box
            flex="1"
            display="flex"
            justifyContent="flex-start"
            paddingTop="20px"
            paddingLeft={{ base: '0%', md: '90px' }}
          >
            <Heading
              fontWeight="extrabold"
              fontSize={{ base: '30px', md: '64px' }}
              textShadow="4px 4px 10px rgba(0, 0, 0, 0.5)"
            >
              Programs
            </Heading>
          </Box>

          <Image
            src={banners[currentDisplay]?.image}
            alt="banner"
            paddingTop="20px"
            paddingBottom="20px"
            display={{ base: 'block', md: 'none' }}
          />

          <Box flex="1" display="flex" justifyContent="center">
            <Box
              width={{ base: 'full', md: '585px' }}
              height={{ base: 'auto', md: '412px' }}
              backgroundColor={{ base: 'none', md: 'rgba(0, 0, 0, 0.5)' }}
              backdropFilter={{ base: 'none', md: 'blur(10px)' }}
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              borderRadius={{ base: '0px', md: '10px' }}
              padding={{ base: '0px', md: '20px' }}
            >
              <Flex
                width="100%"
                justifyContent="flex-start"
                flexDirection="row"
                flexWrap="wrap"
              >
                {banners.map((option, index) => (
                  <Button
                    width="auto"
                    height="auto"
                    key={index}
                    m={2}
                    onClick={() => selectProgram(index)}
                    border={
                      currentDisplay === index ? '2px solid white' : 'none'
                    }
                    color={currentDisplay === index ? 'white' : 'gray'}
                    padding="10px"
                  >
                    {banners[index].title}
                  </Button>
                ))}
              </Flex>
              <Text
                paddingTop={{ base: '10px', md: '0px' }}
                fontWeight="bold"
                fontSize={{ base: '20px', md: '40px' }}
                color="white"
                letterSpacing={{ base: '5px', md: '20px' }}
              >
                {banners[currentDisplay].title.toUpperCase()}
              </Text>
              <Text
                fontWeight={{ base: 400, md: 'medium' }}
                fontSize="18px"
                color="white"
              >
                {banners[currentDisplay].text}
              </Text>
            </Box>
          </Box>
        </Flex>

        <Flex
          display={{ base: 'none', md: 'flex' }}
          height="10%"
          width="full"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box
            width="30%"
            height="full"
            display="flex"
            alignitems="center"
            justifyContent="center"
            flexDirection="column"
            paddingLeft="10%"
          >
            <Text fontWeight="bold" fontSize="12px" color="gray" mb="5px">
              COURSE CODE(S)
            </Text>
            <Text fontWeight="medium" fontSize="24px" color="white">
              {banners[currentDisplay].course_code}
            </Text>
          </Box>
          <Box
            width="30%"
            height="full"
            display="flex"
            alignitems="center"
            justifyContent="center"
            flexDirection="column"
            paddingLeft="10%"
          >
            <Text fontWeight="bold" fontSize="12px" color="gray" mb="5px">
              CLASS TIME
            </Text>
            <Text fontWeight="medium" fontSize="24px" color="white">
              {banners[currentDisplay].class_time}
            </Text>
          </Box>
          <Box
            width="40%"
            height="200px"
            display="flex"
            alignitems="center"
            justifyContent="flex-start"
            flexDirection="column"
            paddingLeft="10%"
          >
            <Button
              width={{ base: 'full', md: '430px' }}
              height="50px"
              backgroundColor="red.500"
              fontSize="18px"
              as="a"
              href="/instruments"
            >
              Instruments Offered
            </Button>
          </Box>
        </Flex>

        <Flex
          display={{ base: 'flex', md: 'none' }}
          height="10%"
          width="full"
          flexDirection="row"
          gap="30px"
          flexWrap="wrap"
        >
          <Box
            width="40%"
            height="full"
            display="flex"
            alignItems="flex-start"
            flexDirection="column"
            paddingLeft="0%"
          >
            <Text
              fontWeight="900"
              fontSize="12px"
              color="gray"
              mb="5px"
              letterSpacing="2px"
            >
              COURSE CODE
            </Text>
            <Text fontWeight="medium" fontSize="18px" color="white">
              {banners[currentDisplay].course_code}
            </Text>
          </Box>
          <Box
            width="45%"
            height="full"
            display="auto"
            alignItems="left"
            flexDirection="column"
          >
            <Text
              fontWeight="900"
              fontSize="12px"
              color="gray"
              mb="5px"
              letterSpacing="2px"
            >
              CLASS TIME
            </Text>
            <Text fontWeight="medium" fontSize="18px" color="white">
              {banners[currentDisplay].class_time}
            </Text>
          </Box>
          <Box
            display={{ base: 'block', md: 'none' }}
            width="full"
            height="full"
            textAlign="center"
            alignitems="center"
            justifyContent="center"
            flexDirection="row"
            paddingLeft="0%"
            paddingBottom="10px"
          >
            <Button
              borderRadius="10px"
              width={{ base: '85%', md: '430px' }}
              height="50px"
              margin="auto"
              backgroundColor="red.500"
              fontSize="14px"
              as="a"
              href="/instruments"
              padding="10px"
            >
              Instruments Offered
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ProgramBanner;
