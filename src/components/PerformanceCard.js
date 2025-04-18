import React from 'react';
import {
  // Avatar,
  Box,
  Button,
  // Center,
  // Collapse,
  Flex,
  Heading,
  Icon,
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
  // Stack,
  Text,
  // useBreakpointValue,
  // useColorMode,
  // useColorModeValue,
  // useDisclosure,
} from '@chakra-ui/react';
import {
  MdAccessTime,
  MdAttachMoney,
  MdEvent,
  MdLocationOn,
} from 'react-icons/md';

const PerformanceCard = ({
  date,
  image_url,
  location,
  price,
  time,
  title,
  link,
}) => {
  return (
    <>
      <Box
        width="400px"
        minWidth="400px"
        height="360px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        bg="gray.900"
      >
        <Flex direction="column" height="100%">
          <Box
            height="65%"
            bgImage={`linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent), url(${image_url})`}
            bgPosition="center"
            bgSize="cover"
            position="relative"
          >
            <Heading
              position="absolute"
              bottom="15px"
              left="15px"
              fontSize="24px"
              fontWeight="bold"
              color="white"
            >
              {title}
            </Heading>
          </Box>

          <Flex
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            height="35%"
            p="13"
          >
            <Flex
              direction="column"
              width="70%"
              justifyContent="center"
              alignItems="flex-start"
              gap="4"
            >
              <Flex
                direction="row"
                height="50%"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={MdEvent} mr="2" w={8} h={8} />
                <Text fontSize="16px">{date}</Text>
              </Flex>
              <Flex
                direction="row"
                height="50%"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={MdLocationOn} mr="2" w={8} h={8} />
                <Text fontSize="16px">{location}</Text>
              </Flex>
            </Flex>

            {/* Second Column (40%) */}
            <Flex
              direction="column"
              width="30%"
              justifyContent="center"
              alignItems="flex-start"
              gap="4"
            >
              <Flex
                direction="row"
                height="50%"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={MdAccessTime} mr="2" w={8} h={8} />
                <Text fontSize="16px">{time}</Text>
              </Flex>
              <Flex
                direction="row"
                height="50%"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={MdAttachMoney} mr="2" w={8} h={8} />
                <Text fontSize="16px">{price}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Button m="2" h="50px" bg="red.500" as="a" href={link}>
            View Details
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default PerformanceCard;
