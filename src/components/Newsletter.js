import React from 'react';
import { BiMailSend } from 'react-icons/bi';
import {
  // Avatar,
  Box,
  Button,
  // Center,
  // Collapse,
  // Flex,
  Heading,
  // Icon,
  IconButton,
  // Image,
  Input,
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

const Newsletter = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        height="700px"
        width="100%"
        overflow="hidden"
        bgImage={`url(${'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1723091339/DSC_6805_3_iah2z3.png'})`}
        bgPosition="center 200px"
        bgRepeat="no-repeat"
        bgColor="black"
      >
        <Stack
          position="absolute"
          top={{ base: '0px', md: '100px' }}
          align={'flex-start'}
          display="flex"
          alignItems={{ base: 'left', md: 'center' }}
          justifyContent={{ base: 'left', md: 'center' }}
          padding={{ base: '15px', md: '0px' }}
          maxWidth="500px"
        >
          <Heading textAlign={{ base: 'left', md: 'center' }}>
            Join Our Newsletter
          </Heading>
          <Text
            fontSize={{ base: '18px', md: '16px' }}
            textAlign={{ base: 'left', md: 'center' }}
            marginBottom={{ base: '10px', md: '25px' }}
            w={{ base: '100%', md: '400px' }}
          >
            Stay updated with our upcoming performances once they&apos;re
            announced and find out about our special events!
          </Text>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={2}
            align="start"
          >
            <Input
              placeholder={'Your email address'}
              bg="white"
              border={0}
              _focus={{
                bg: 'whiteAlpha.300',
              }}
              w={{ base: '100%', md: '400px' }}
              _placeholder={{
                color: 'gray.500',
                opacity: 1,
              }}
            />
            <IconButton
              display={{ base: 'none', md: 'block' }}
              bg="red.500"
              color={useColorModeValue('white', 'white')}
              _hover={{
                bg: 'red.400',
              }}
              aria-label="Subscribe"
              icon={<BiMailSend style={{ fontSize: '24px' }} />}
              width={{ base: '100%', md: '60px' }}
            />

            <Button
              display={{ base: 'block', md: 'none' }}
              bg="red.500"
              color={useColorModeValue('white', 'white')}
              _hover={{
                bg: 'red.400',
              }}
              aria-label="Subscribe"
              width={{ base: '100%', md: '60px' }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Newsletter;
