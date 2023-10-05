import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  SimpleGrid,
  VStack,
  Button,
  Icon,
  useMediaQuery,
  Image,
  Flex,
  
} from "@chakra-ui/react";
import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import ReviewPage from "../components/ReviewPage ";
import ForumApp from "../components/ForumApp";

// import Carousel from "../components/Carousel";
  const cardsData = [
    { id: 1, title: 'AI-driven guidance system', subtitle: 'AI Component', summary: 'AI-driven guidance system provides a well curated options for potential careers', image: 'https://excellediaventures.com/images/ai-new-icon.png' },
    { id: 2, title: 'Card 2', subtitle: 'Subtitle 2', summary: 'Summary 2', image: 'img-b' },
    { id: 3, title: 'COMMUNITY FORUM', subtitle: 'Subtitle 2', summary: 'Acommunity page to share experiances and interact with people having samilar interests as well as get in touch with indstry specialists', image: 'comm-img-cards1.png' },
    // Add more card data
  ];

const Home = () => {
  
  const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");
  const [selectedId, setSelectedId] = useState(null);
  

  return (
    <Box pb={20} textAlign="center" bg="gray.200">
     
    <Box
      bg="blue.800"
      color="white"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
    >
      <Container maxW="container.lg">
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
          gap={4}
          alignItems="center"
        >
           <GridItem colSpan={{ base: 12, md: isSmallerThanMd ? 0 : 6 }}>
            {/* Add an image here */}
            <Image src="img-bg-opn1.png" alt="CareerCompass Image" height={"80%"}/>
          </GridItem>
          <GridItem
            colSpan={{ base: 12, md: isSmallerThanMd ? 12 : 6 }}
            textAlign={isSmallerThanMd ? "center" : "left"}
          >
            <Heading as="h1" size="xl" mb={4}>
              Get the Best Career Guidance at CareerCompass
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} mb={8}>
            CareerCompass is your trusted companion in 
            navigating the complexities of career choices. 
            Utilising advanced AI technology, we offer seamless
             aptitude testing experiences for students to simplifying your
             journey, providing you with the insights and confidence necessary
              to make informed decisions about your future. 
            </Text>
            <SimpleGrid columns={2} spacing={4} mb={8}>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>A range of comprehensive assessments  to build a holistic profile. </Text>
              </VStack>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>AI-driven system for ideal career suggestion</Text>
              </VStack>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>Explore a vast Resource Library tailored to your chosen field.</Text>
              </VStack>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>Get insights into emerging industries, job trends, 
                  and salary expectations </Text>
              </VStack>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>Personalised User Profile </Text>
              </VStack>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>Community Forum </Text>
              </VStack>
            </SimpleGrid>
            <NavLink to="/authenticate">
            <Button
              colorScheme="whiteAlpha"
              size="lg"
              fontWeight="bold"
              _hover={{ bg: "blue.200", color: "blue.500" }}
            >
              Get Started
            </Button>
            </NavLink>
          </GridItem>
         
        </Grid>
      </Container>
    </Box>

    <Box height={20}></Box>
      <Box>
     
    <ForumApp/>

  
 <Container
      maxW="container.lg"
      mt={8}
      px={4}
      py={6}
      mx="auto"
      textAlign="left"
    >

      <Box
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={"white"}
        boxShadow="md"
      >
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          AI-Driven Career Guidance:
        </Text>
       
        <Text mt={4}>
        At our core, we harness the power of cutting-edge artificial intelligence
         to transform your career planning experience. 
         Our comprehensive assessments delve deep into your interests, strengths,
          personality traits, and values, crafting a holistic understanding of who you are.
        </Text>
        <Text mt={4}>
        Using advanced machine learning algorithms, our system doesn't just stop at evaluating your profile. 
        It crunches vast datasets in real-time, identifying emerging industries, analyzing job market trends, 
        and understanding salary expectations. 
        These data-driven insights are then personalized for you, providing a clear roadmap for your career journey.
        </Text>
        <Text mt={4}>
        This AI-driven approach ensures that your decisions are not just intuitive but also backed by real-time,
         accurate, and relevant information. Whether you're exploring new horizons or considering a shift, 
        our technology is here to guide you with precision and confidence. Your future, powered by AI, begins here.
        </Text>
        <Text mt={4}>
         
        </Text>
        <Text mt={4}>
          
        </Text>
      </Box>
    </Container>
    </Box>
<Container       maxW="container.lg"
 >
<ReviewPage/>
</Container>
    </Box>
  );
};

export default Home;
