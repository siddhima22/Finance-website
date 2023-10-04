import { Outlet, ScrollRestoration } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs.jsx"
import Navbar from "../components/Navbar.jsx"
import Footer from "../pages/Footer.jsx"
import { Grid, GridItem,Box } from "@chakra-ui/react"
import { useEffect } from "react"
// import alanBtn from '@alan-ai/alan-sdk-web';
// import Chatbot from "../components/Chatbot.jsx"




export default function RootLayout() {
  
  return (
    
    <div className="root-layout">
      <ScrollRestoration />
      <header>
        <Navbar/>
        {/* <Breadcrumbs /> */}
        {/* <Chatbot /> */}
      </header>
      <main>
        <Outlet />
      </main>
      <Footer/>

      {/* <Grid
      templateColumns={{ base: "1fr", lg: "repeat(6, 1fr)", xl: "repeat(5, 1fr)" }}
      gap={6}
    >
      
      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid> */}
    </div>
  )
}

