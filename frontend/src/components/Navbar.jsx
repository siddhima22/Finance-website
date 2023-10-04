import React, { useState, useEffect } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Spacer,
  Link,
  Button,
  Heading,
  chakra,
  useMediaQuery,
  IconButton,
  useDisclosure
} from "@chakra-ui/react";
import{motion}from "framer-motion"
// import { AddIcon, MinusIcon } from "@chakra-ui/icons"; // Import the Chakra UI icons you want to use

const Navbar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { isOpen, onToggle } = useDisclosure();
  const [isSticky, setIsSticky] = useState(false);


  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsSticky(scrollTop > 0);
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const [zoomLevel, setZoomLevel] = useState(100);

  const increaseZoom = () => {
    const newZoomLevel = zoomLevel + 10;
    document.body.style.zoom = `${newZoomLevel}%`;
    setZoomLevel(newZoomLevel);
  };

  const decreaseZoom = () => {
    const newZoomLevel = zoomLevel - 10;
    document.body.style.zoom = `${newZoomLevel}%`;
    setZoomLevel(newZoomLevel);
  };

  return (
    <Box
      as="nav"
      bg="blue.500"
      opacity={0.9}
      p={4}
      position={isSticky ? 'fixed' : 'relative'}
left={0}
      right={0}
      top={0}
      zIndex={999} // Ensure the Navbar stays on top of other content
    >
      <Flex
        alignItems="center"
        justifyContent={isLargerThan768 ? "space-between" : "center"} // Center items on small screens
        // maxW="1200px"
        mx="auto"
        flexWrap="wrap" // Allow items to wrap to the next line on small screens
        maxW="container.xl"
        px={4}
        py={2}
        align="center"

      >
        <motion.div
             initial={{ opacity: 0, y: 20 }} 
             animate={{ opacity: 1, y: 0, scale:1.5 }}   
             transition={{ duration: 1 }} >
        <Heading as="span" fontWeight="bold" fontSize="xl"
        //  as="h1" 
         size="lg" 
         color="black"
          textAlign="left">
          CareerCompass
        </Heading>
        </motion.div>
        <Spacer />


        <Box display={{ base: 'block', md: 'none' }}>
          {/* Mobile menu toggle button */}
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            variant="ghost"
            size="md"
            aria-label="Toggle Menu"
          />
        </Box>
        <Box
          display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          justifyContent="flex-end" // Align links to the right
        >
          {/* Navigation links */}
          {/* <Box borderRight="1px solid" p={1} mr={4}><NavLink to="/">Home</NavLink></Box> */}
          <motion.Box  whileHover={{  color: 'white',y: -10, }} 
          transition= {{ duration: 0.3,}}
           initial={{  color: 'black',y: 0,}}
          mr={4}><NavLink to="/">Home</NavLink></motion.Box>
          <Box width={4}></Box>
          <motion.Box whileHover={{  color: 'white',y: -10, }} 
            transition= {{ duration: 0.3,}}
           initial={{  color: 'black',y: 0,}}
           mr={4}><NavLink to="/about">About</NavLink></motion.Box>
               <Box width={4}></Box>
          <motion.Box whileHover={{  color: 'white',y: -10, }}
              transition= {{ duration: 0.3,}}
             initial={{  color: 'black',y: 0,}}
            mr={4}><NavLink to="/help">Help</NavLink></motion.Box>
                <Box width={4}></Box>
          <motion.Box whileHover={{  color: 'white',y: -10, }} 
            transition= {{ duration: 0.3,}}
           initial={{  color: 'black',y: 0,}}
           mr={4}><NavLink to="/doctors">Contact Us</NavLink></motion.Box>
                   <Box width={4}></Box>
          <motion.Box whileHover={{  color: 'white',y: -10, }} transition= {{ duration: 0.3,}}
           initial={{  color: 'black',y: 0,}}
            mr={4}><NavLink to="/bookappointment">Resource Library</NavLink></motion.Box>
        </Box>  
          <Box width={4}></Box>
          <motion.Box whileHover={{  color: 'white',y: -10, }} 
             transition= {{ duration: 0.3,}}
             initial={{  color: 'black',y: 0,}}
            mr={4}><NavLink to="/reports">Reports</NavLink></motion.Box>
        
        <Box width={4}></Box>


        {/* <Button
        colorScheme="teal"
        leftIcon={<AddIcon />} // AddIcon for increase
        onClick={increaseZoom}
        mr={4}
      >
      </Button>
      <Button
        colorScheme="red"
        leftIcon={<MinusIcon />} // MinusIcon for decrease
        onClick={decreaseZoom}
        mr={4}

      >
      </Button> */}
        {/* <Spacer /> */}
        <NavLink to="/authenticate">
        <Button colorScheme="blue">Login</Button>
        </NavLink>
      </Flex>
    </Box>
  );
};

export default Navbar;
