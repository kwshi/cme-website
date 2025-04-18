import React from 'react';
import {
  // Avatar,
  Box,
  Button,
  // Center,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Link,
  // Menu,
  // MenuButton,
  // MenuDivider,
  // MenuItem,
  // MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useBreakpointValue,
  // useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
  // MoonIcon,
  // SunIcon,
} from '@chakra-ui/icons';

const NavBar = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  // const {signedIn, setSignedIn} = React.useContext(AuthContext);

  // TEMPORARY
  // const [signedIn, setSignedIn] = React.useState(false);

  // const handleSignIn = () => {
  //     setSignedIn((prevSignedIn) => !prevSignedIn);
  // };
  // END TEMPORARY

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'black')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 8 }}
        px={{ base: 'flex', md: 20 }}
        align={{ base: 'left', md: 'center' }}
      >
        <Flex
          flex={{ base: 'auto', md: 1 }}
          justify={{ base: 'left', md: 'start' }}
          paddingLeft="7%"
        >
          <Link
            textAlign={useBreakpointValue('left')}
            fontSize={{ base: '20px', md: '28px' }}
            fontWeight="semibold"
            color={useColorModeValue('gray.800', 'white')}
            href={'/'}
          >
            UCLA Chinese Music
          </Link>
        </Flex>
        <Flex
          flex={{ base: 'auto', md: 'auto' }}
          ml={{ base: 'auto', md: -2 }}
          display={{ base: 'flex', md: 'none' }}
          justifyContent={'flex-end'}
          align="center"
        >
          <IconButton
            align="center"
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
            color={useColorModeValue('white')}
          />
        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }} justify="flex-end">
          <Flex
            display={{ base: 'none', md: 'flex' }}
            ml={10}
            justify="flex-end"
          >
            <DesktopNav />
            <Button
              as="a"
              href="https://docs.google.com/forms/d/1Cy9lgqgpYJlJLDlNahgoux5wfap7sj7qjx5DykwXDE4"
              bgColor="red.500"
              ml={10}
            >
              Join today
            </Button>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          {/* <Button
            onClick={toggleColorMode}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          {signedIn ? ( // Render Avatar if signedIn is true
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={'https://avatars.dicebear.com/api/male/username.svg'}
                />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'2xl'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem onClick={handleSignIn}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <>
                <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                onClick={handleSignIn} // Toggle signedIn state when clicked
                >
                Sign In
                </Button>
           
            <Button
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                href={'#'}
                _hover={{
                bg: 'pink.300',
                }}
            >
                Sign Up
            </Button>
          </>
          )} */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue('white', 'white');
  const linkHoverColor = useColorModeValue('gray.800', 'red.500');
  const popoverContentBgColor = useColorModeValue('white', 'gray.900');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} mt="10px">
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={3}
                href={navItem.href ?? '#'}
                fontSize="18px"
                fontWeight="medium"
                color={'linkColor'}
                _hover={{
                  color: linkHoverColor,
                  textDecoration: 'none',
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ href, label, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'red.500' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'red.500'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={'dark-gray'} color={'white'} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ children, href, label }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          //   color={useColorModeValue('gray.600', 'gray.200')}
          color={'white'}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    // children: [
    //   {
    //     href: '/about',
    //     label: 'Our Story',
    //     subLabel: 'Learn more about our mission and values',
    //   },
    //   {
    //     href: '#',
    //     label: 'New & Noteworthy',
    //     subLabel: 'Up-and-coming Changes',
    //   },
    // ],
    href: '/home',
    label: 'Home',
  },
  {
    // children: [
    //   {
    //     href: '#',
    //     label: 'Our Director',
    //     subLabel: 'Meet Professor Li!',
    //   },
    //   {
    //     href: '/about#student-leadership',
    //     label: 'Student Leadership',
    //     subLabel: 'Meet the student leaders!',
    //   },
    // ],
    href: '/about',
    label: 'About',
  },
  {
    // children: [
    //   {
    //     href: 'programs',
    //     label: 'Our Program',
    //     subLabel: 'Learn more about our programs!',
    //   },
    //   {
    //     href: 'programs',
    //     label: 'How to Join',
    //     subLabel: 'Interested in joining our program? It\'s very simple!',
    //   },
    //   {
    //     href: '/programs#course-calendar',
    //     label: 'Course Calendar',
    //     subLabel: 'Check out the time commitment for our program.',
    //   },
    // ],
    href: '/programs',
    label: 'Programs',
  },
  {
    // children: [
    //   {
    //     href: '/performances',
    //     label: 'Upcoming Performances',
    //     subLabel: 'Interested in upcoming performances?',
    //   },
    //   {
    //     href: '/performances#past-performances',
    //     label: 'Past Performances',
    //     subLabel: 'Check out the archive of our past performances!',
    //   },
    // ],
    href: '/performances',
    label: 'Performances',
  },
  {
    href: '/instruments',
    label: 'Instruments',
  },
];

export default NavBar;
