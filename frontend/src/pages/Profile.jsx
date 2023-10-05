import React from 'react';
import {
  Box,
  Container,
  Avatar,
  Heading,
  Text,
  Button,
  Divider,
} from '@chakra-ui/react';

const Profile = () => {
  return (
    <Container maxW="container.lg">
      <Box
        mt={8}
        p={6}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
      >
 

        <Avatar
          size="xl"
          name="Rito Mukherjee"
          src= 'https://bit.ly/dan-abramov'
          mx="auto"
        />
        <Heading mt={4} textAlign="center">
          Rito Mukherjee
        </Heading>
        <Text mt={2} textAlign="center">
        User
        </Text>
        <Divider mt={4} mb={4} />
        <Text fontSize="xl"></Text>
       
        <Divider mt={4} mb={4} />
        <Text fontSize="xl">Contact</Text>
        <Text mt={2}>Email: rita@gmail.com</Text>
        <Text mt={2}>Phone: +91 9820123456</Text>
        <Text mt={2}>Locality: Mumbai , India</Text>
        <Button mt={4} colorScheme="blue">
          Edit Profile
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;
