import React from 'react';
import {Box, Link as ChakraLink, Flex} from '@chakra-ui/react';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <Flex bg="teal.500" p={5} color='white'>
            <Box p='2'>
                <ChakraLink as={Link} to='/'>Home</ChakraLink>
            </Box>
            <Box p='2'>
                <ChakraLink as={Link} to='/ChatHistory'>Chat History</ChakraLink>
            </Box>
            <Box p='2'>
                <ChakraLink as={Link} to='/About'>About</ChakraLink>
            </Box>
        </Flex>
    );
};

export default NavBar;