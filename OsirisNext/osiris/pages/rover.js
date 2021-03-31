import React, {useState} from "react";
import Head from 'next/head';
import NavbarContainer from '../components/Navbar';
import Logo from '../components/Logo';
import MenuLinks from '../components/MenuLinks';
import Hero from '../components/Hero';
import ServiceContainer from '../components/ServiceContainer';
import Service from '../components/Service';
import Footer from '../components/Footer';
import SearchContainer from '../components/SearchContainer';
import PhotoGallery from '../components/PhotoGallery';

import {Box,
        Text,
        WrapItem, 
        useToast, 
        FormControl,
        FormLabel,
        FormErrorMessage,
        FormHelperText,
        Select,
        Button,
        Input} from '@chakra-ui/react';
import Image from "next/image";
import {getPhotos, getQuerybasedPhotos} from '../lib/api';



export default function Rover({data}) {
    
    const [pics, setPics] = useState(data);
    const [rover, setRover] = useState('');
    const [cam, setCam] = useState('');
    const [sol, setSol] = useState('');
    // const [isLoading, setIsLoading] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const toast = useToast();
    let tempSOL = sol; 
    const handleSubmit = async (e) => {
        await e.preventDefault();
        if((rover == "") || (cam == "") || (sol == "")) {
            toast({
                title: "Error",
                description: "A field cant be empty",
                status: "error",
                duration: 9000,
                isClosable: true,
            });

        } else {
            setIsSubmit(true);
            const res = await getQuerybasedPhotos(rover, cam, sol);
            await setPics(res);
                       
            console.log(`Rover is ${rover}, cam is ${cam},sol is ${sol}`);
            console.log("This handleSubmit is working with props!!!");
            
        }
        // setIsLoading(true);
        
        
    }


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
            <SearchContainer>
                <Box mb={16}>
                    <Text fontSize="4xl" fontWeight="semibold" color="white">Browse Martian images by Sol</Text>
                </Box>
                <Box>
                    <FormControl onSubmit={handleSubmit} isRequired display="flex" >
                        <Box w="15rem" mr={8}>
                            <FormLabel color="white" fontWeight="semibold">Rover</FormLabel>
                            <Select bg="white" color="black" placeholder="Select Rover" onChange={event => setRover(event.currentTarget.value)}>
                                <option value="curiosity">Curiosity</option>
                                <option value="opportunity">Opportunity</option>
                                <option value="spirit">Spirit</option>
                            </Select>
                        </Box>

                        <Box w="25rem" mr={8}>
                            <FormLabel color="white" fontWeight="semibold">Camera</FormLabel>
                            <Select bg="white" color="black" placeholder="Select Camera" onChange={event => setCam(event.currentTarget.value)}>
                                <option value="fhaz">Front Hazard Avoidance Camera</option>
                                <option value="rhaz">Rear Hazard Avoidance Camera</option>
                                <option value="mast">Mast Camera</option>
                                <option value="chemcam">Chemistry and Camera Complex</option>
                                <option value="mahli">Mars Hand Lens Imager</option>
                                <option value="navcam">Navigation Camera</option>

                            </Select>
                        </Box>

                        <Box w="10rem" mr={8}>
                            <FormLabel color="white" fontWeight="semibold">SOL</FormLabel>
                            <Input bg="white" color="black" value={sol} onChange={(event) => setSol(event.target.value) } placeholder="200"  />
                            
                        </Box>
                        <Button onClick={handleSubmit} mt={8} colorScheme="red" variant="solid">Search</Button>
                        
                        
                    </FormControl>
                </Box>              
                
            </SearchContainer>
            <PhotoGallery sol={tempSOL}>
                {   !isSubmit ? <Text>Start searching for images</Text> :
                    pics.photos.map((pic) => (
                        <WrapItem key={pic.id} overflow="hidden">
                            <Image src={pic.img_src} height={200} width={200} />
                        </WrapItem>
                    ))
                }
                
            </PhotoGallery>
        </>
    );

}

export async function getServerSideProps() {
    
    
    const data = await getPhotos();
    
    return {
        props: {
            data
        },
    };
}