import Head from 'next/head';
import NavbarContainer from '../components/Navbar';
import Logo from '../components/Logo';
import MenuLinks from '../components/MenuLinks';
import Hero from '../components/Hero';
import ServiceContainer from '../components/ServiceContainer';
import ServiceDesc from '../components/ServiceDesc';
import Service from '../components/Service';
import Footer from '../components/Footer';

import {Box, Stack, VStack, Center, Text, Button} from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons';



// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Osiris</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarContainer>
        <Logo w="10rem" color="#eb5757"  />
        <MenuLinks />

      </NavbarContainer>
      <Hero>
            <Center>
                <Text fontSize="6xl" fontWeight="semibold" color="white">The Future is <Box as="span" color="red.500">Red!</Box></Text>
            </Center>
      </Hero>
      <ServiceContainer>
        <ServiceDesc />
        <Service />
      </ServiceContainer>
      <Hero minH="sm" backgroundImage="linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url('./img/background1920.jpg')" backgroundPosition="bottom">
            <Center>
                <VStack>
                  <Text fontSize="4xl" mb={1} fontWeight="semibold" color="white">Explore the Martian surface</Text>
                  <Text fontSize="1xl" fontWeight="light" color="white">Browse through image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars</Text>
                  <Stack direction="row">
                    <Button rightIcon={<ArrowForwardIcon/>} mt={8} colorScheme="red" variant="solid">Get Started</Button>
                  </Stack>
                </VStack>
                
            </Center>
      </Hero>
      <Footer />

      
    </>
    
  );
}
