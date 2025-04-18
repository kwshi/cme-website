import React from 'react';
import events from 'data/schedule';
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react';

export default function Calendar() {
  function abbreviateDay(dayName) {
    const abbreviations = {
      Monday: 'Mon',
      Tuesday: 'Tues',
      Wednesday: 'Wed',
      Thursday: 'Thurs',
      Friday: 'Fri',
      Saturday: 'Sat',
      Sunday: 'Sun',
    };
    return abbreviations[dayName] || dayName;
  }

  function getDayIndex(dayName) {
    const dayOrder = {
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
      Sunday: 7,
    };
    return dayOrder[dayName] || 99;
  }

  // Sort events by day
  const sortedEvents = React.useMemo(() => {
    return [...events].sort((a, b) => getDayIndex(a.day) - getDayIndex(b.day));
  }, [events]);

  function getBgColor(type) {
    switch (type) {
      case 'practice':
        return 'yellow.500';
      case 'class':
        return 'red.500';
      default:
        return 'white';
    }
  }
  let lastDay = null;

  return (
    <Box maxW="90%" mx="auto">
      <Heading
        fontSize="30px"
        fontWeight="bold"
        color="white"
        paddingTop="10px"
        paddingBottom="10px"
      >
        {' '}
        Class & Practice Schedule
      </Heading>
      {sortedEvents.map((event, index) => {
        const isNewDay = event.day !== lastDay;
        lastDay = event.day;

        return (
          <React.Fragment key={index}>
            {/* If it's a new day, insert a Divider for separation (except at the very top). */}
            {isNewDay && index !== 0 && <Divider my={4} borderColor="white" />}

            <Flex
              my={3}
              p={3}
              borderRadius="15px"
              boxShadow="md"
              alignItems="flex-start"
              bg={getBgColor(event.type)}
            >
              {/* Day Column */}
              <Text w="4rem" fontSize="lg" fontWeight="bold" mr={2}>
                {abbreviateDay(event.day)}
              </Text>

              {/* Event Details: start-end times + title */}
              <Flex direction="column">
                <Text fontSize="sm" fontWeight="semibold" mb={1}>
                  {event.start_time} – {event.end_time}
                </Text>
                <Text fontSize="sm">{event.title}</Text>
              </Flex>
            </Flex>
          </React.Fragment>
        );
      })}
    </Box>
  );
}
