import {Box, Heading, Text} from '@chakra-ui/react';

const ServiceDesc = ({children, ...props}) => {
    return (
        <Box w="60%" minH="17rem" p={10} borderRadius="2xl" border="1px" borderColor="gray.100" boxShadow="md" mr={5} >
            <Heading fontSize="4xl" color="#eb5757" textAlign="left" fontWeight="semibold" mb={5}>Insight Mars Weather Service</Heading>
            <Text fontSize="md" color="gray.600" fontWeight="normal" textAlign="left" mb={5}>NASA’s InSight Mars lander takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator. </Text>
        </Box>
    );
};

export default ServiceDesc;