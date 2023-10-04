import React, { useState } from "react";
import {
  Box,
  Heading,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Select,
  Stack,
  VStack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

const DoctorAppointmentForm = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    contactNumber: "",
    email: "",
    doctorSpecialty: "",
    symptoms: "",
  });

  const [slots, setSlots] = useState([
    {
      preferredDate: "",
      preferredTime: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ formData, slots });
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newSlots = [...slots];
    newSlots[index][name] = value;
    setSlots(newSlots);
  };

  const addSlot = () => {
    setSlots([...slots, { preferredDate: "", preferredTime: "" }]);
  };

  const removeSlot = (index) => {
    const newSlots = [...slots];
    newSlots.splice(index, 1);
    setSlots(newSlots);
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Book Doctor Appointment
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="patientName" isRequired>
            <FormLabel>Patient Name</FormLabel>
            <Input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
            />
          </FormControl>

          <FormControl id="contactNumber" isRequired>
            <FormLabel>Contact Number</FormLabel>
            <Input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </FormControl>

          <FormControl id="doctorSpecialty" isRequired>
            <FormLabel>Doctor Specialty</FormLabel>
            <Select
              name="doctorSpecialty"
              value={formData.doctorSpecialty}
              onChange={(e) => setFormData({ ...formData, doctorSpecialty: e.target.value })}
            >
              <option value="cardiology">Cardiology</option>
              <option value="dermatology">Dermatology</option>
              <option value="pediatrics">Pediatrics</option>
              {/* Add more specialties as needed */}
            </Select>
          </FormControl>

          <FormControl id="symptoms" isRequired>
            <FormLabel>Symptoms</FormLabel>
            <Textarea
              name="symptoms"
              value={formData.symptoms}
              onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
            />
          </FormControl>

          {slots.map((slot, index) => (
            <VStack key={index} spacing={4}>
              <Heading as="h3" size="md" mb={2}>
                Time Slot {index + 1}
                {index > 0 && (
                  <IconButton
                    icon={<DeleteIcon />}
                    aria-label={`Delete Time Slot ${index + 1}`}
                    colorScheme="red"
                    onClick={() => removeSlot(index)}
                  />
                )}
              </Heading>
              <HStack spacing={4}>
                <FormControl id={`preferredDate${index}`} isRequired>
                  <FormLabel>Preferred Date</FormLabel>
                  <Input
                    type="date"
                    name="preferredDate"
                    value={slot.preferredDate}
                    onChange={(e) => handleChange(e, index)}
                  />
                </FormControl>
                <FormControl id={`preferredTime${index}`} isRequired>
                  <FormLabel>Preferred Time</FormLabel>
                  <Input
                    type="time"
                    name="preferredTime"
                    value={slot.preferredTime}
                    onChange={(e) => handleChange(e, index)}
                  />
                </FormControl>
              </HStack>
            </VStack>
          ))}
          <Button
            leftIcon={<AddIcon />}
            colorScheme="teal"
            onClick={addSlot}
          >
            Add Time Slot
          </Button>

          <Button type="submit" colorScheme="teal">
            Book Appointment
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default DoctorAppointmentForm;
