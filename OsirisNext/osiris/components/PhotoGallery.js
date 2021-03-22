import {Box, Heading, Wrap, WrapItem, Image} from '@chakra-ui/react';

const PhotoGallery = ({children, ...props}) => {
    return (
        <Box p={8} m={8} backgroundColor="whiteAlpha.300">
            <Heading color="#eb5757" fontWeight="bold" mb={8}>Images from Sol 200</Heading>
            <Wrap px="1rem" spacing={4} justify="center">
                {children}
            </Wrap>

        </Box>
    );

};

export default PhotoGallery;
