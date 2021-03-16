import {Box, Text} from '@chakra-ui/react';

const Logo = ({...props}) => {
    return (
        <Box {...props}>
            <Text fontSize="2xl" fontWeight="bold">Osiris</Text>
        </Box>
    );
};

export default Logo; 