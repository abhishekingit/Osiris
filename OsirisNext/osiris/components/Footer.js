import {Flex, Box, Stack, Text} from '@chakra-ui/react';
import MenuItems from '../components/MenuItems';

const Footer = () => {
    return (
        <Flex align="center" justifyContent="center" wrap="wrap" w="100%" p={8} backgroundColor="white" borderBottomWidth="thin" borderBottomColor="gray.100">
            <Box flexBasis={{base: "100%", md:"auto"}} mt={8}>
                <Stack spacing={8} align="center" justify="flex-end" direction="row">
                    <MenuItems to="/about">About</MenuItems>
                    <MenuItems to="/terms">Terms of Use</MenuItems>
                    <MenuItems to="/contact">Contact</MenuItems>
                    <MenuItems to="/apiuse">API use</MenuItems>

                </Stack>
                <Text align="center" mt={10} fontSize="1xl" fontWeight="semibold" color="black">Made by Abhishek Misar</Text>
                
            </Box>
            
            
        </Flex>
    );

};

export default Footer;