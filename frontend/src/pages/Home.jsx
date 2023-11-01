import React from "react";
import {
  Box,
  Container,
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
import Hero from "../components/Hero"
import StatsCard from "../components/StatsCard"
import HorizontalScrollPane from "../components/HorizontalScrollPane";
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

      <Box>
     

  <Hero></Hero>
  <StatsCard/>
 <Container
      maxW="container.lg"
      mt={8}
      px={4}
      py={6}
      mx="auto"
      textAlign="left"
    >

    </Container>
   <HorizontalScrollPane/>
    </Box>

    </Box>
  );
};

export default Home;
