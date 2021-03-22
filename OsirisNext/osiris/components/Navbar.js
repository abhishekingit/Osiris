import { Flex } from '@chakra-ui/react';

const NavbarContainer = ({children, ...props}) => {
    return (
        <Flex align="center" justifyContent="space-between" wrap="wrap" w="100%" p={8} backgroundColor="white" borderBottomWidth="thin" borderBottomColor="gray.100" {...props}>
            {children}
        </Flex>       
    );
};

export default NavbarContainer;