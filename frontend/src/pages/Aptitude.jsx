import React, { useState } from 'react';
import { HStack, Box, Text, Toast,Radio, RadioGroup, Button, VStack } from '@chakra-ui/react';
import {useToast} from '@chakra-ui/react';
const questions = [
    "I enjoy solving technical problems.",
    "I like working with children and sharing knowledge.",
    "I have a passion for artistic and creative work.",
    "I am interested in analyzing and interpreting data.",
    "I enjoy providing healthcare and taking care of patients.",
    "I have an interest in marketing and understanding consumer behavior.",
    "I enjoy cooking and experimenting with different cuisines.",
    "I am fascinated by the principles of engineering and physics.",
    "I have a strong passion for visual arts and expressiveness.",
    "I am interested in financial analysis and managing budgets.",
    "I have a passion for investigative journalism and storytelling.",
    "I have an interest in architectural design and creativity.",
    "I am interested in law enforcement and investigative work.",
    "I enjoy creating fashion designs and working with fabrics.",
    "I have an interest in designing and planning spaces.",
    "I am fascinated by the study of living organisms and biology.",
    "I enjoy performing arts and acting.",
    "I am good with numbers and enjoy financial analysis.",
    "I have an interest in interior design and aesthetics.",
    "I am passionate about music and musical instruments.",
  ];

const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"];

const Aptitude = () => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
    const toast = useToast(); // Chakra UI's toast hook
  
    const handleAnswerChange = (index, answer) => {
      const newAnswers = [...answers];
      newAnswers[index] = answer;
      setAnswers(newAnswers);
    };
  
    const handleSubmit = () => {
      // Log each answer to the console
      answers.forEach((answer, index) => {
        console.log(`Question ${index + 1}: ${answer}`);
      });
  
      // Display selected answers in a toast message
      toast({
        title: "Answers Submitted",
        description: `Selected Answers: ${answers.join(", ")}`,
        status: "success",
        duration: 5000, // Toast will be visible for 5 seconds
        isClosable: true,
      });
    };

  return (
    <Box width="100%" align="center" justify="center" minHeight="100vh">
    <VStack p={4} spacing={4} align="stretch">
      <h1>Career Interest Aptitude Test</h1>
      {questions.map((question, index) => (
        <Box key={index} borderWidth="1px" borderRadius="lg" p={4}>
          <Text mb={4}>{question}</Text>
          <RadioGroup onChange={(value) => handleAnswerChange(index, value)} value={answers[index]}>
            <HStack  justify="center">
              {options.map((option, optionIndex) => (
                <Radio key={optionIndex} value={option}>
                  {option}
                </Radio>
              ))}
            </HStack>
          </RadioGroup>
        </Box>
      ))}
      <Button colorScheme="teal" _hover={{ bg: 'teal.200' }} onClick={handleSubmit}>
        Submit
      </Button>
    </VStack>
  </Box>
);
};

  
export default Aptitude;