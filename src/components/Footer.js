import {
  Box,
  Container,
  IconButton,
  Image,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { BiMailSend } from 'react-icons/bi';
import { FaInstagram } from 'react-icons/fa';

const Logo = (props) => {
  return (
    <svg
      height={32}
      viewBox="0 0 120 28"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* SVG paths for the logo */}
    </svg>
  );
};

const SocialButton = ({ children, href, label }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'black')}
      color={useColorModeValue('white', 'white')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ base: '1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'} display={{ base: 'none', md: 'block' }}>
              © 2024 All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton
                label="Instagram"
                href="https://www.instagram.com/uclachinesemusic/"
              >
                <Image
                  src="https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741059536/ig_trans_uvs9ac.png"
                  alt="Instagram"
                  boxSize="24px"
                  filter="grayscale(100%)"
                  _hover={{ filter: 'grayscale(0%)', transform: 'scale(1.1)' }}
                  transition="0.2s ease-in-out"
                />
              </SocialButton>

              <SocialButton
                label="RedNote"
                href="https://www.xiaohongshu.com/user/profile/64a0e00b000000001001e5c3?xsec_token=YB7RO4x7hwpVaVjtzYo6-fYCrupQ1Ug70xm-Axa-hwCJE=&xsec_source=app_share&xhsshare=CopyLink&appuid=67acefc5000000000e01e21b&apptime=1741065815&share_id=3970ca8eef624718af06bd6bb250eb65"
              >
                <Image
                  src="https://res.cloudinary.com/dp0f6uqzo/image/upload/v1741059055/rednote_azgljz.png"
                  alt="RedNote"
                  boxSize="24px"
                  filter="grayscale(100%)"
                  _hover={{ filter: 'grayscale(0%)', transform: 'scale(1.1)' }}
                  transition="0.2s ease-in-out"
                />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Navigation</ListHeader>
            <Link href={'/home'}>Home</Link>
            <Link href={'/about'}>About</Link>
            <Link href={'/programs'}>Programs</Link>
            <Link href={'/performances'}>Performances</Link>
            <Link href={'/instruments'}>Instruments</Link>
            <Link href={'/admin'}>Admin</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Contact</ListHeader>
            <Link href={'mailto:chi.li@ucla.edu'}>Professor Chi Li</Link>
            <Link href={'mailto:uclacm.inquiry@gmail.com'}>
              General Inquiries
            </Link>
          </Stack>
          <Stack align={'flex-start'} display={{ base: 'none', md: 'flex' }}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('red.600', 'red.500')}
                color={useColorModeValue('white', 'white')}
                _hover={{
                  bg: 'red',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
