import {
  Grid,
  GridItem,
  Box,
  Text,
  Link as ChakraLink,
  VStack,
  IconButton,Icon
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="blue.800" 
        minHeight={{ lg: "100vh" }}
        p={{ base: "20px", lg: "30px" }}
      >
        
        <VStack align="start" spacing={2} w="100%"> 
          <Box w="100%">
            <Box
              as={ChakraLink}
              href="/"
              display="inline-block"
              bg="white"
              p={2}
              borderRadius="md"
            >
              <Icon></Icon>
              
            </Box>
          </Box>
          <Box
            bg="rgba(255, 255, 255, 0.04)"
            borderRadius="md"
            p={2}
            cursor="pointer"
            w="100%"
            _hover={{ bg: "blue.600" }} 
          >
            <VStack align="start" spacing={0}>
              <Text color="white" fontWeight="bold">
                APP
              </Text>
              <Text color="neutral.400" fontSize="sm">
                NAME
              </Text>
            </VStack>
          </Box>
          <Box w="100%">
            <VStack align="start" spacing={0}>
              <ChakraLink
              as={Link}
                to="/"
                display="flex"
                alignItems="center"
                bg="blue.800"
                color="white"
                p={2}
                borderRadius="md"
                w="100%" 
                _hover={{ bg: "blue.600" }} 
              >
                Overview
              </ChakraLink>
              <ChakraLink
               as={Link}
                to="/profile"
                display="flex"
                alignItems="center"
                bg="blue.800"
                color="white"
                p={2}
                borderRadius="md"
                w="100%" 
                _hover={{ bg: "blue.600" }} 
              >
                Profile
              </ChakraLink>
              <ChakraLink
                to="/graphs"
                display="flex"
                alignItems="center"
                bg="blue.800"
                color="white"
                p={2}
                borderRadius="md"
                w="100%" 
                _hover={{ bg: "blue.600" }} 
              >
                Graphs
              </ChakraLink>
              <ChakraLink
               
                to="/to-do/src/index.js"
                display="flex"
                alignItems="center"
                bg="blue.800"
                color="white"
                p={2}
                borderRadius="md"
                w="100%" 
                _hover={{ bg: "blue.600" }} 
              >
                Todo List
              </ChakraLink>
              <ChakraLink
                to="/features"
                display="flex"
                alignItems="center"
                bg="blue.800"
                color="white"
                p={2}
                borderRadius="md"
                w="100%" 
                _hover={{ bg: "blue.600" }} 
              >
                Features
              </ChakraLink>
              <ChakraLink
               as={Link}
                to="/calendar"
                display="flex"
                alignItems="center"
                bg="blue.800"
                color="white"
                p={2}
                borderRadius="md"
                w="100%"
                _hover={{ bg: "blue.600" }} 
              >
                Calendar
              </ChakraLink>
              <ChakraLink
               as={Link}
                to="/reviews"
                display="flex"
                alignItems="center"
                bg="blue.800"
                color="white"
                p={2}
                borderRadius="md"
                w="100%" 
                _hover={{ bg: "blue.600" }}
              >
                Reviews
              </ChakraLink>
            </VStack>
          </Box>
        </VStack>
      </GridItem>

        <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}
