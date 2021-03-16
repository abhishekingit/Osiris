import {Box, Text} from '@chakra-ui/react';

const Service = ({children, ...props}) => {
    return (
        <Box flex="1" minH="17rem" p={10} backgroundImage="linear-gradient(to right bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),url('./img/mars-weather.jpg')" backgroundRepeat="no-repeat" backgroundPosition="center" backgroundSize="cover" borderRadius="2xl" border="1px" borderColor="gray.100" boxShadow="md" >
            <Text fontSize="2xl" fontWeight="semibold" color="#eb5757">Sol 815</Text>
            <Text fontSize="2xl" fontWeight="light" color="#eb5757">March 12</Text>
            <Text fontSize="1xl" fontWeight="medium" color="white" mt={5}>High:</Text>
            <Text fontSize="1xl" fontWeight="medium" color="white">Low:</Text>
        </Box>
    );
};

export default Service;
