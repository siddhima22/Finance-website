import React from 'react';
import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Spacer,
  SimpleGrid,
  Center,
  Progress,
} from '@chakra-ui/react';

const StudentProfile = () => {
  return (
    <Box p={8}>
      <Heading mb={4}>Welcome, Student!</Heading>
      
      {/* Student Career Information */}
      <Box mb={8}>
        <Heading size="md">Career Information</Heading>
        <Text fontSize="lg">Course: Computer Science</Text>
        <Text fontSize="lg">GPA: 3.8</Text>
      </Box>

      {/* Vertical Roadmap */}
      <Box mb={8}>
        <Heading size="md">Roadmap</Heading>
        {/* Use appropriate Chakra UI components to create a vertical roadmap */}
      </Box>

      {/* Important Dates */}
      <Box mb={8}>
        <Heading size="md">Important Dates</Heading>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Exam Dates
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>Upcoming exam dates go here.</AccordionPanel>
          </AccordionItem>
          {/* Add more AccordionItems for other important dates */}
        </Accordion>
      </Box>

      {/* Tables */}
      <Box mb={8}>
        <Heading size="md">Academic Performance</Heading>
        <Table variant="striped" colorScheme="teal" size="md">
          <Thead>
            <Tr>
              <Th>Subject</Th>
              <Th>Grade</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Math</Td>
              <Td>A</Td>
            </Tr>
            {/* Add more rows for other subjects */}
          </Tbody>
        </Table>
      </Box>

      {/* Graphs */}
      <Box mb={8}>
        <Heading size="md">Progress Overview</Heading>
        {/* Use a charting library like Chart.js or D3.js to create graphs */}
      </Box>
    </Box>
  );
};

export default StudentProfile;
