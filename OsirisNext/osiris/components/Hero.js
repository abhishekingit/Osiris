import {Box, Center, Text} from '@chakra-ui/react';

const Hero = ({children, ...props}) => {
    return (
        <Box display="flex" alignItems="center" justifyContent="center" w="100%" minH="md"  overflow="hidden" bgColor="white" borderBottomWidth="thin" borderBottomColor="gray.100" {...props}>
            {children}
        </Box>
    );

};

export default Hero;
