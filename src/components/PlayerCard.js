import React from 'react';
import {
  // Avatar,
  Box,
  // Button,
  // Center,
  // Collapse,
  Flex,
  Heading,
  // Icon,
  // IconButton,
  Image,
  Link,
  // Menu,
  // MenuButton,
  // MenuDivider,
  // MenuItem,
  // MenuList,
  // Popover,
  // PopoverContent,
  // PopoverTrigger,
  // Stack,
  Text,
  // useBreakpointValue,
  // useColorMode,
  // useColorModeValue,
  // useDisclosure,
} from '@chakra-ui/react';
// import { MdLocationOn, MdAccessTime, MdEvent, MdAttachMoney } from 'react-icons/md';

const PlayerCard = ({ player }) => {
  const ig_handle = (ig_link) => {
    const handle = ig_link.split('/').at(-2);
    console.log('Handle:' + handle);
    return handle;
  };
  return (
    <Box width="700px" height="220px" bg="black">
      <Flex
        width="full"
        height="full"
        paddingLeft="10%"
        paddingRight="10%"
        gap={5}
        bg="black"
      >
        <Box width="50%" p="10px" marginRight="5%">
          <Heading fontWeight="extrabold" mb="4" fontSize="32px">
            {player.name}
          </Heading>
          <Flex flexDir="row">
            <Text fontWeight="bold" fontSize="20px">
              Year:&nbsp;
            </Text>
            <Text fontWeight="normal" fontSize="20px">
              {player.year}
            </Text>
          </Flex>
          <Flex flexDir="row">
            <Text fontWeight="bold" fontSize="20px">
              Major:&nbsp;
            </Text>
            <Text fontWeight="normal" fontSize="20px">
              {player.major}
            </Text>
          </Flex>
          <Flex flexDir="row">
            <Text fontWeight="bold" fontSize="20px">
              Years Played:&nbsp;
            </Text>
            <Text fontWeight="normal" fontSize="20px">
              {player.years}
            </Text>
          </Flex>
          <Link
            href={player.insta}
            display="flex"
            flexDir="row"
            alignItems="center"
            gap={2}
            mt="16px"
            isExternal
          >
            <Image
              src="https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733101902/ig_lp0jsk.png"
              boxSize="20px"
              alt=""
            />
            <Text fontWeight="normal" fontSize="20px">
              {ig_handle(player.insta)}
            </Text>
          </Link>
        </Box>

        <Box width="50%">
          <Image
            src={player.profile}
            alt={player.name}
            borderRadius="full"
            boxSize="180px"
            objectFit="cover"
            mb="4px"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default PlayerCard;
