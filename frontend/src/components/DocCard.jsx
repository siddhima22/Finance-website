import React from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Heading,
  Card,
  CardBody,
  Image,
  Stack,
  Divider,
} from "@chakra-ui/react";




const doctorData = [
  { name: "Dr. Emily Johnson", description: "Pediatrician", location: "Mumbai, Maharashtra", imageSrc: "http://mmust.ac.ke/schools/som/images/black-doctor.jpg" },
  { name: "Dr. Michael Brown", description: "Dentist", location: "Delhi, Delhi", imageSrc: "https://thumbs.dreamstime.com/b/portrait-happy-african-doctor-private-clinic-confident-mature-black-consulting-digital-tablet-looking-camera-smiling-164999099.jpg" },
   { name: "Dr. Olivia Clark", description: "Orthopedic Surgeon", location: "Ahmedabad, Gujarat", imageSrc: "https://leman-clinic.ch/wp-content/uploads/2018/11/02.jpg" },
  { name: "Dr. Aryan Sharma", description: "Dermatologist", location: "Chandigarh, Punjab", imageSrc: "https://www.justrunlah.com/wp-content/uploads/2016/10/Indian-lady-doctor.jpg" },
  { name: "Dr. Ethan Wilson", description: "Cardiologist", location: "Jaipur, Rajasthan", imageSrc: "https://healthyworkforceinstitute.com/wp-content/uploads/2020/04/smiling-doctor.jpg" },
  { name: "Dr. William Smith", description: "Neurologist", location: "Chennai, Tamil Nadu", imageSrc: "https://www.writergirl.com/wp-content/uploads/2014/11/Doctor-790X1024.jpg" },
  { name: "Dr. Olivia Davis", description: "Psychiatrist", location: "Kolkata, West Bengal", imageSrc: "https://www.mmpa.org.za/wp-content/uploads/2019/05/female-african-american-doctor-smiling_4ymhmw4qge__F0000.png" },
  { name: "Dr. Sarah Lee", description: "Gynecologist", location: "Bangalore, Karnataka", imageSrc: "https://tecuniversitario.net/wp-content/uploads/2020/06/asian-medical-doctor-woman-X85RA6Z.jpg" },
  { name: "Dr. Benjamin Johnson", description: "Ophthalmologist", location: "Hyderabad, Telangana", imageSrc: "https://thumbs.dreamstime.com/b/doctor-portrait-21332357.jpg" },
  { name: "Dr. Sophia Miller", description: "Dermatologist", location: "Pune, Maharashtra", imageSrc: "https://curae.com/wp-content/uploads/2018/03/AdobeStock_168113506-1-e1522461533266.jpeg" },

  { name: "Dr. Priya Patel", description: "Oncologist", location: "Mysuru, Karnataka", imageSrc: "https://consult.curable.care/images/indian-doctor-png-4.png" },
  { name: "Dr. Rohit Gupta", description: "ENT Specialist", location: "Lucknow, Uttar Pradesh", imageSrc: "https://d2gr5kl7dt2z3t.cloudfront.net/blog/wp-content/uploads/2017/02/02060408/shutterstock_287380919.jpg" },
];

  
const DoctorList = () => {
  return (
    <SimpleGrid columns={[1,2, 4]} spacingX={4} spacingY={8}> 
      {doctorData.map((doctor, index) => (
        <DocCard
          key={index}
          name={doctor.name}
          description={doctor.description}
          location={doctor.location}
          imageSrc={doctor.imageSrc}
        />
      ))}
    </SimpleGrid>
  );
};
const DocCard = (props) => {
  return (
    <Card maxW="sm">
      <CardBody textAlign="center"> 
        <Image
          src={props.imageSrc}
          alt={`Image of ${props.name}`}
          borderRadius="lg"
          h="200px" 
          objectFit="cover" 
        />
        <Box bg="green.200" py="2" mt="3" rounded="md" padding={5}> 
          <Stack spacing="2" textAlign="left">
            <Heading size="sm">Name: {props.name}</Heading>
            <Text fontSize="sm">Specialisation: {props.description}</Text>
            <Text color="blue.600" fontSize="md">
              Location: {props.location}
            </Text>
          </Stack>
        </Box>
      </CardBody>
      <Divider />
    </Card>
  );
};
export default DoctorList;