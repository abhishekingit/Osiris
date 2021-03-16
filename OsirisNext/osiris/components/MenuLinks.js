import {Box, Stack} from '@chakra-ui/react';
import MenuItems from '../components/MenuItems';

const MenuLinks = () => {
    return (
        <Box flexBasis={{base: "100%", md:"auto"}}>
            <Stack spacing={8} align="center" justify="flex-end" direction="row">
                <MenuItems to="/">Home</MenuItems>
                <MenuItems to="/about">About</MenuItems>
                <MenuItems to="/apiuse">API use</MenuItems>

            </Stack>
        </Box>
        
    );
};

export default MenuLinks;