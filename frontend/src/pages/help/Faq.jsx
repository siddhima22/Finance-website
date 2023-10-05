import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the purpose of this website?",
      answer: "The purpose of this website is to provide information about our products and services.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact our customer support team by phone or email. Visit the 'Contact Us' page for more information.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer refunds for products returned within 30 days of purchase. Please review our refund policy for more details.",
    },

      {
        question: 'How can career counseling help me?',
        answer: 'Career counseling can provide you with valuable insights into various career paths, help you identify your strengths and interests, and guide you towards suitable career choices.'
      },
      {
        question: 'What job opportunities are available for students?',
        answer: 'There are diverse job opportunities for students across different fields such as technology, healthcare, business, arts, and more. Job availability depends on your skills, qualifications, and the industry you are interested in.'
      },
      {
        question: 'How do I prepare for a job interview?',
        answer: 'Preparing for a job interview involves researching the company, practicing common interview questions, dressing professionally, and showcasing your skills and experiences confidently. Career counselors can also provide mock interview sessions to help you prepare.'
      },
      {
        question: 'What skills are employers looking for?',
        answer: 'Employers often look for a combination of technical and soft skills. Technical skills specific to the job role and industry are crucial. Additionally, soft skills such as communication, teamwork, problem-solving, and adaptability are highly valued by employers.'
      },
      {
        question: 'Is further education necessary for career growth?',
        answer: 'Further education, such as pursuing a higher degree or certifications, can enhance your skills and qualifications, potentially opening up more career opportunities. However, the necessity of further education depends on your career goals and the requirements of your desired field.'
      },
      {
        question: 'How can I find internships or part-time jobs?',
        answer: 'You can find internships and part-time jobs through online job portals, university career centers, social media networks, and professional networking events. Career counseling services often provide resources and guidance for finding suitable internships and job opportunities.'
      }
      // Add more FAQ items as needed
    
  ];

  return (
    <Box maxW="container.md" mx="auto" py={10}>
      <Heading as="h2" size="xl" textAlign="center" mb={8}>
        Frequently Asked Questions
      </Heading>
      <Accordion allowToggle>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} border="none">
            <h2>
              <AccordionButton px={4} py={2} bg="gray.100" _hover={{ bg: "gray.200" }}>
                <Box flex="1" textAlign="left">
                  <Text fontSize="lg" fontWeight="bold">
                    {faq.question}
                  </Text>
                </Box>
                <AccordionIcon color="gray.500" />
              </AccordionButton>
            </h2>
            <AccordionPanel px={4} pb={4} bg="gray.50" color="gray.700">
              <Text fontSize="lg">{faq.answer}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default FAQ;
