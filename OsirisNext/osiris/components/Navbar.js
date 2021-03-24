import { Flex } from '@chakra-ui/react';

const NavbarContainer = ({children, ...props}) => {
    return (
        <Flex align="center" justifyContent="space-between" wrap="wrap" w="100%" p={4} backgroundColor="whiteAlpha.300" {...props}>
            {children}
        </Flex>       
    );
};

export default NavbarContainer;