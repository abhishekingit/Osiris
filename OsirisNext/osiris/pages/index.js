import React, {useState} from "react";
import Head from 'next/head';
import NavbarContainer from '../components/Navbar';
import Logo from '../components/Logo';
import MenuLinks from '../components/MenuLinks';
import Hero from '../components/Hero';
import ServiceContainer from '../components/ServiceContainer';
import Footer from '../components/Footer';

import {Box, Stack, VStack, HStack, Center, Text, Heading, Button} from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons';

import {getWeather} from '../lib/api';



// import styles from '../styles/Home.module.css'

export default function Home({data}) {
  const [forecast, setForecast] = useState(data);
  
  
  return (
    <>
      <Head>
        <title>Osiris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarContainer>
        <Logo w="10rem" color="#FF5435"  />
        <MenuLinks />

      </NavbarContainer>
      <Hero backgroundImage="linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('./img/background1920.jpg')" backgroundPosition="bottom">
            <Center>
                <VStack>
                  <Text fontSize="6xl" fontWeight="extrabold" color="white">The Future is <Box as="span" color="red.500">Red!</Box></Text>
                  <Text fontSize="1xl" fontWeight="medium" color="white">Browse through image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars</Text>
                  <Stack direction="row">
                    <Button as="a" href="/rover"  rightIcon={<ArrowForwardIcon/>} mt={8} colorScheme="red" variant="solid">Get Started</Button>
                  </Stack>
                </VStack>
            </Center>
      </Hero>
      <ServiceContainer>
                <VStack>
                    <Heading fontSize="5xl" color="red.500" textAlign="center" fontWeight="bold" mb={4}>Insight Mars Weather Service</Heading>
                    <Text w="2xl" fontSize="1xl" color="gray.600" fontWeight="semibold" textAlign="center" mb={8}>NASA’s InSight Mars lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator. </Text>
                    <HStack spacing="10">
                      { 
                        forecast.sol_keys.map((sol, i) => (
                          
                          <Box key={i} minH="50" minW="45" bgColor="#FF5435" border="1px" borderColor="gray.100" p={10}>
                            <Text align="center" fontSize="2xl" fontWeight="bold" color="white">Sol {sol}</Text>
                            <Text align="center" fontSize="1xl" fontWeight="medium" color="white" mb={10}>{new Date(forecast[sol].First_UTC).toDateString()}</Text>
                            <Text align="center" fontSize="1xl" fontWeight="normal" color="white">High: {forecast[sol].PRE.mx}Pa</Text>
                            <Text align="center" fontSize="1xl" fontWeight="normal" color="white">Low: {forecast[sol].PRE.mn}Pa</Text>
                          </Box>
                        ))

                      }
                        
                        
                                      
                    </HStack>
                </VStack>  
                
      </ServiceContainer>  
           
      
      
      <Footer />

      
    </>
    
  );
}

export async function getStaticProps() {
  const data = await getWeather();
  return {
    props: {
      data,
    },
  };
}
