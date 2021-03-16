import {Link, Text} from '@chakra-ui/react';

const MenuItems = ({children, to='/', isLast, ...rest}) => {
    return (
        <Link _hover={{textDecorationLine:'none'}} href={to}>
            <Text _hover={{color:"#eb5757"}} fontSize="1xl" fontWeight="normal" display="block" {...rest}>
                {children}
            </Text>
        </Link>
    );
};

export default MenuItems;
