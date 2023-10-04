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
  
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import ReviewPage from "../components/ReviewPage ";
import ForumApp from "../components/ForumApp"
// import Carousel from "../components/Carousel";

const Home = () => {
  
  const [isSmallerThanMd] = useMediaQuery("(max-width: 768px)");


  return (
    <Box pb={20} textAlign="center" bg="gray.200">
     
     
    <Box
      bg="green.500"
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
            <Image src="doc_with_bg.png" alt="CareerCompass Image" />
          </GridItem>
          <GridItem
            colSpan={{ base: 12, md: isSmallerThanMd ? 12 : 6 }}
            textAlign={isSmallerThanMd ? "center" : "left"}
          >
            <Heading as="h1" size="xl" mb={4}>
              Simplify Medical Appointments with CareerCompass
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} mb={8}>
              Our web app, CareerCompass, simplifies the process of scheduling
              doctor appointments for common people using cutting-edge AI
              technology. We understand that booking medical appointments can be
              a daunting task, especially for individuals with busy schedules or
              those seeking prompt medical care.
            </Text>
            <SimpleGrid columns={2} spacing={4} mb={8}>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>Find available doctors and clinics effortlessly</Text>
              </VStack>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>AI-driven system for convenient appointment scheduling</Text>
              </VStack>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>Receive timely reminders and notifications</Text>
              </VStack>
              <VStack align={isSmallerThanMd ? "center" : "start"}>
                <Icon as={CheckIcon} color="green.200" boxSize={6} />
                <Text>Never miss an important medical appointment</Text>
              </VStack>
            </SimpleGrid>
            <NavLink to="/authenticate">
            <Button
              colorScheme="whiteAlpha"
              size="lg"
              fontWeight="bold"
              _hover={{ bg: "green.200", color: "green.500" }}
            >
              Get Started
            </Button>
            </NavLink>
          </GridItem>
         
        </Grid>
      </Container>
    </Box>
      <Box>
      
<ForumApp/>
      {/* <Heading as="h2" size="xl" mb={4}>
        Options
      </Heading>
      <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth={250}>
        {medicalOptions.map((option, index) => (
          <Box bg="white" height="200px" border="1px solid" key={index}>
            <Text color={{ base: 'pink', md: 'green', lg: 'green' }}>
              {index + 1}. {option}
            </Text>
          </Box>
        ))}
      </SimpleGrid> */}
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
          AI-Driven Doctor Appointment Booking
        </Text>
        <Text>
          In the fast-paced world of healthcare, finding the right doctor and scheduling an
          appointment can be a challenging task. AI-driven doctor appointment booking
          platforms are revolutionizing the way patients access medical care. Powered by
          cutting-edge artificial intelligence technology, these platforms offer numerous
          benefits to both patients and healthcare providers.
        </Text>
        <Text mt={4}>
          AI-driven systems can instantly match patients with available doctors,
          specialists, or clinics based on their medical needs, location, and preferences.
          Patients no longer need to spend hours searching for the right healthcare
          professional; instead, the AI system streamlines the process, ensuring quick and
          efficient booking.
        </Text>
        <Text mt={4}>
          These platforms also take into account a patient's medical history, ensuring that
          they are connected with healthcare providers who can best address their specific
          needs. Whether it's a routine check-up, consultation, or specialized treatment,
          AI-driven appointment booking ensures patients receive the appropriate care.
        </Text>
        <Text mt={4}>
          One of the standout features of AI-driven systems is their ability to optimize
          appointment scheduling. These systems consider factors like a patient's availability,
          doctor's schedule, and location to suggest the most convenient appointment times.
          Patients can say goodbye to long waiting times and enjoy flexibility in choosing
          their medical appointments.
        </Text>
        <Text mt={4}>
          Furthermore, AI-driven platforms provide timely reminders and notifications to
          patients, reducing the likelihood of missed appointments. Patients receive alerts
          about upcoming appointments, ensuring they never overlook an important medical
          visit.
        </Text>
        <Text mt={4}>
          In summary, AI-driven doctor appointment booking is transforming healthcare access.
          It simplifies the process, matches patients with the right providers, optimizes
          scheduling, and enhances the overall patient experience.
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



