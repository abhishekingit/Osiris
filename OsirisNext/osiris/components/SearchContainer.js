import {Flex} from '@chakra-ui/react';

const SearchContainer = ({children}) => {
    return (
        <Flex flexDirection="column" bgColor="red" minH="18rem" p={8} m={8} bgGradient="linear(to-r, #e74c3c, #000000)" borderRadius="2xl" border="1px" borderColor="gray.100">
            {children}
        </Flex>
    );
};

export default SearchContainer;