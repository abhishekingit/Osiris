import {Center, VStack, Heading, Text} from '@chakra-ui/react';

const ServiceContainer = ({children, ...props}) => {
    return (
        // <Flex align="center" justifyContent="center" px={8} py={24} wrap="wrap" borderBottomWidth="thin" borderBottomColor="gray.100" {...props}>
        //     <Heading fontSize="4xl" color="#eb5757" textAlign="left" fontWeight="semibold" mb={5}>Insight Mars Weather Service</Heading>
        //     <Text fontSize="md" color="gray.600" fontWeight="normal" textAlign="left" mb={5}>NASA’s InSight Mars lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator. </Text>
        // </Flex>

        <Center px={8} py={24} wrap="wrap" bgColor="gray.50" {...props}>
            {children}                
        </Center>
    );
};

export default ServiceContainer;
