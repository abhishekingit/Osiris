import {Box, Center, Text} from '@chakra-ui/react';

const Hero = ({children, ...props}) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" w="100%" minH="md"  overflow="hidden" backgroundImage="linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('./img/mars-astro.jpg')" backgroundRepeat="no-repeat" backgroundPosition="center" backgroundSize="cover" borderBottomWidth="thin" borderBottomColor="gray.100" {...props}>
            {children}
        </Box>
    );

};

export default Hero;
