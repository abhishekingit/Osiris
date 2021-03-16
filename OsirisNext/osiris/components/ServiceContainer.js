import {Flex} from '@chakra-ui/react';

const ServiceContainer = ({children, ...props}) => {
    return (
        <Flex align="center" justifyContent="space-between" px={8} py={24} wrap="wrap" borderBottomWidth="thin" borderBottomColor="gray.100" {...props}>
            {children}
        </Flex>
    );
};

export default ServiceContainer;
