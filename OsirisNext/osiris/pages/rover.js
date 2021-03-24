import React, {useState} from "react";
import Head from 'next/head';
import NavbarContainer from '../components/Navbar';
import Logo from '../components/Logo';
import MenuLinks from '../components/MenuLinks';
import Hero from '../components/Hero';
import ServiceContainer from '../components/ServiceContainer';
import ServiceDesc from '../components/ServiceDesc';
import Service from '../components/Service';
import Footer from '../components/Footer';
import SearchContainer from '../components/SearchContainer';
import SearchForm from '../components/SearchForm';
import PhotoGallery from '../components/PhotoGallery';

import {Box, Text, WrapItem, useToast} from '@chakra-ui/react';
import Image from "next/image";
import {getPhotos} from '../lib/api';





export default function Rover({data}) {
    const [pics, setPics] = useState(data);

    const toast = useToast();
    const handleSubmit = async (e) => {
        await e.preventDefault();
        console.log("This handleSubmit is working with props!!!");
        console.log(data);
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
                    <SearchForm submitMethod={handleSubmit} />
                </Box>              
                
            </SearchContainer>
            <PhotoGallery>
                {
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

export async function getStaticProps() {
    const data = await getPhotos();
    return {
        props: {
            data,
        },
    };
}