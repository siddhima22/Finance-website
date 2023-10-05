import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Heading } from '@chakra-ui/react';

const faqData = [
  {
    question: 'How can career counseling help me?',
    answer: 'Career counseling can provide you with valuable insights into various career paths, help you identify your strengths and interests, and guide you towards suitable career choices.'
  },
  {
    question: 'What job opportunities are available for students?',
    answer: 'There are diverse job opportunities for students across different fields such as technology, healthcare, business, arts, and more. Job availability depends on your skills, qualifications, and the industry you are interested in.'
  },
  // Add more FAQ items as needed
];

const FAQ = () => {
  return (
    <Box p={8}>
      <Heading mb={4}>Frequently Asked Questions</Heading>
      <Accordion allowToggle>
        {faqData.map((faq, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{faq.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default FAQ;