import Head from 'next/head';
import NavbarContainer from '../components/Navbar';
import Logo from '../components/Logo';
import MenuLinks from '../components/MenuLinks';
import Hero from '../components/Hero';
import ServiceContainer from '../components/ServiceContainer';
import ServiceDesc from '../components/ServiceDesc';
import Service from '../components/Service';
import Footer from '../components/Footer';


export default function About() {
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
        </>
    );

};