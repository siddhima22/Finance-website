import React, { useEffect, useState } from "react";
import { Box, Heading, Text, VStack,Container } from "@chakra-ui/react";
import { Navigate, useSearchParams } from "react-router-dom";
import DocCard from "../components/DocCard"
export default function About() {
  return (
    <>
    <Container >
    <VStack spacing="4" align="start" py={4}>
      <Heading as="h2" size="lg">
        About Us
      </Heading>
      <Text>
        Our web app, CareerCompass, simplifies the process of scheduling doctor
        appointments for common people using cutting-edge AI technology. We
        understand that booking medical appointments can be a daunting task,
        especially for individuals with busy schedules or those seeking prompt
        medical care.
      </Text>
      <Text>
        With CareerCompass, you can say goodbye to the hassle of manually finding
        and coordinating appointment slots with healthcare providers. Our
        intuitive interface allows you to search for available doctors,
        specialists, and clinics in your area effortlessly. Whether you need a
        routine check-up, consultation, or specialized treatment, CareerCompass
        makes it easy to find the right healthcare professional.
      </Text>
      <Text>
        But that's not all! Our AI-driven system takes the guesswork out of
        appointment scheduling. It considers your preferences, medical history,
        and the availability of healthcare providers to suggest the most
        convenient appointment times. You can also receive timely reminders and
        notifications, ensuring you never miss an important medical
        appointment.
      </Text>
      <Text>
        CareerCompass is designed to empower you to take control of your health
        journey. We believe that everyone deserves easy access to quality
        healthcare, and our web app is here to simplify the process for you.
      </Text>
    </VStack>
    </Container>
    <DocCard m={4}/>
    </>
  );
}
