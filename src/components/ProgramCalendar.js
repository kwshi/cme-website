import React from 'react';
import events from 'data/schedule';
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

const ProgramCalendar = () => {
  const week_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const time_slots = [];
  for (let hour = 9; hour <= 21; hour++) {
    time_slots.push(`${hour}:00`);
  }

  const day_to_grid_col = {
    Friday: 6,
    Monday: 2,
    Thursday: 5,
    Tuesday: 3,
    Wednesday: 4,
  };

  const time_to_grid_row = {};
  time_slots.forEach((time, index) => {
    time_to_grid_row[time] = index + 2;
  });

  return (
    <Box bgColor="black">
      <Box
        height="150px"
        width="full"
        paddingLeft="10%"
        backgroundColor="black"
        paddingTop="50px"
      >
        <Heading fontSize="40px" fontWeight="bold">
          Class & Practice Schedule
        </Heading>
        <Box height="50px" width="full" display="flex" mt="15px">
          <Flex
            height="full"
            width="200px"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <Box borderRadius="full" boxSize="25px" backgroundColor="red.500" />
            <Text fontSize="24px" fontWeight="semibold" color="gray.100">
              Class Hours
            </Text>
          </Flex>
          <Flex
            height="full"
            width="200px"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <Box
              borderRadius="full"
              boxSize="25px"
              backgroundColor="yellow.500"
            />
            <Text fontSize="24px" fontWeight="semibold" color="gray.100">
              Practice Time
            </Text>
          </Flex>
        </Box>
      </Box>

      <Box
        paddingX="10%"
        backgroundColor="black"
        paddingBottom="50px"
        bgColor="black"
      >
        <Grid
          templateColumns="100px repeat(5, 1fr)"
          templateRows={`50px repeat(${time_slots.length}, 80px)`}
          borderWidth="1px"
          borderColor="gray.200"
          backgroundColor="black"
          position="relative"
          mt="30px"
        >
          {/* Days */}
          <GridItem />
          {week_days.map((day) => (
            <GridItem
              key={day}
              borderLeftWidth="1px"
              borderColor="gray.200"
              bg="black"
              gridColumn={day_to_grid_col[day]}
              gridRow="1"
            >
              <Text
                color="white"
                textAlign="center"
                fontWeight="bold"
                fontSize="18px"
                letterSpacing="2px"
              >
                {day.toUpperCase()}
              </Text>
            </GridItem>
          ))}

          {/* Time and Cells */}
          {time_slots.map((time, index) => (
            <React.Fragment key={time}>
              <GridItem
                gridColumn="1"
                gridRow={index + 2}
                borderTopWidth="1px"
                borderColor="gray.200"
                bg="black"
              >
                <Text
                  color="gray.100"
                  textAlign="center"
                  fontSize="18px"
                  fontWeight="semibold"
                >
                  {time}
                </Text>
              </GridItem>

              {week_days.map((day, index) => (
                <GridItem
                  key={`${day}-${time}`}
                  gridColumn={day_to_grid_col[day]}
                  gridRow={index + 2}
                  borderLeftWidth="1px"
                  borderTopWidth="1px"
                  borderColor="gray.200"
                ></GridItem>
              ))}
            </React.Fragment>
          ))}

          {/* Events */}
          {events.map((event) => {
            const gridColumn = day_to_grid_col[event.day];
            const gridRowStart = time_to_grid_row[event.start_time];
            const gridRowEnd = time_to_grid_row[event.end_time];

            return (
              <GridItem
                key={`${event.day}-${event.start_time}`}
                gridColumn={gridColumn}
                gridRow={`${gridRowStart} / ${gridRowEnd}`}
                backgroundColor={
                  event.type === 'class' ? 'red.500' : 'yellow.500'
                }
                borderRadius="15px"
                padding="10px"
                margin="5px"
                color="white"
                zIndex={1}
                position="relative"
                borderLeftWidth="1px"
                borderTopWidth="1px"
                borderRightWidth="1px"
                borderBottomWidth="1px"
                borderColor="gray.200"
              >
                <Text fontSize="sm" fontWeight="bold">
                  {event.title}
                </Text>
                <Text fontSize="xs">
                  {event.start_time} - {event.end_time}
                </Text>
              </GridItem>
            );
          })}
        </Grid>
      </Box>

      <Box backgroundColor="black" paddingBottom="5%">
        <Box
          padding="45px"
          marginLeft="10%"
          backgroundColor="gray.200"
          width="80%"
          height="160px"
          borderRadius="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text whiteSpace="pre-line" fontWeight="medium" fontSize="18px">
            * Practice Hours take place in SMB 1343, the Gamelan Room.{'\n'}*
            This schedule is subject to change. Classes may be added or removed
            based on the Professor Chi Li’s availability.{'\n'}* Note that UCLA
            DARS may indicate different times, but referring to this chart and
            speaking to UCLA Chinese Music Ensemble board members would yield
            more accurate times.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ProgramCalendar;
