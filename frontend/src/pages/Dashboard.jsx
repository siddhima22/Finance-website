import { Box, SimpleGrid, Text, Heading ,Stat,StatHelpText,StatArrow,StatNumber,StatLabel} from "@chakra-ui/react";
import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer,} from '@chakra-ui/react';
import { CheckCircleIcon, DownloadIcon } from '@chakra-ui/icons'

 
export default function OverviewPage() {
  return (
    <div>
      <SimpleGrid p="20px" columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
  
        <Box
          bg="white"
          p="4"
          boxShadow="md"
          borderRadius="md" 
        >
          <Text fontSize="lg" fontWeight="bold">Total Revenue</Text>
          <Text fontSize="2xl">$1,234,567</Text>
          <CheckCircleIcon color={"blue.400"}></CheckCircleIcon>
          
        </Box>
        <Box
          bg="white"
          p="4"
          boxShadow="md"
          borderRadius="md" 
        >
        <Stat>
         <StatLabel>Projected Sales</StatLabel>
            <StatNumber>345,670</StatNumber>
            <StatHelpText>
          <StatArrow type='increase' />
             23.36%
          </StatHelpText>
        </Stat>
       </Box>


    
        <Box
          bg="white"
          p="4"
          boxShadow="md"
          borderRadius="md" 
        >
          <Heading size="md" mb="4">Summary</Heading>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Box>

        <Box
          bg="white"
          p="4"
          boxShadow="md"
          borderRadius="md" 
        >
          <Text fontSize="lg" fontWeight="bold">Downloads</Text>
          <Text fontSize="2xl">3,456</Text>
          <DownloadIcon color={"blue.400"}></DownloadIcon>
        </Box>
      </SimpleGrid>
      <TableContainer>
  <Table variant='striped' colorScheme='blue'>
    
    <Thead>
      <Tr>
        <Th>Name of users</Th>
        <Th>Email id</Th>
        <Th isNumeric>Number of purchases</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>simar chawla</Td>
        <Td>sim@gmail.com</Td>
        <Td isNumeric>16</Td>
      </Tr>
      <Tr>
        <Td>vishal mishra</Td>
        <Td>vish@gmail.com</Td>
        <Td isNumeric>5</Td>
      </Tr>
      <Tr>
        <Td>diana raisinghani</Td>
        <Td>dino@gmail.com</Td>
        <Td isNumeric>9</Td>
      </Tr>
    
 
      <Tr>
        <Td>aastha rohra</Td>
        <Td>aas@gmail.com</Td>
        <Td isNumeric>20</Td>
      </Tr>
      <Tr>
        <Td>priyansh hemani</Td>
        <Td>pri@gmail.com</Td>
        <Td isNumeric>9</Td>
      </Tr>
      <Tr>
        <Td>eesha karnani</Td>
        <Td>eesh@gmail.com</Td>
        <Td isNumeric>25</Td>
      </Tr>
      <Tr>
        <Td>krishna raheja</Td>
        <Td>kri@gmail.com</Td>
        <Td isNumeric>6</Td>
      </Tr>
      <Tr>
        <Td>siddhima de</Td>
        <Td>sid@gmail.com</Td>
        <Td isNumeric>7</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
      
    </div>
  );
}
