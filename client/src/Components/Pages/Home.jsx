import React, { useState } from 'react';
import NavBar from './NavBar';
import { Center, Input, Button, VStack, Box } from '@chakra-ui/react';

const Home = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    // handling the input value such as 
  };

return (
    <>
        <NavBar/>
        <Center flexDirection="column" h="80vh">
            <VStack spacing={4} w="150%">
                <h1 color="" fontSize="2xl">GymGPT</h1>
                <form onSubmit={handleSubmit}>
                    <Input 
                        placeholder="What's you training today? e.g. Chest, Back, Legs" 
                        onChange={handleChange}
                    />
                    <Box height="1rem" /> 
                    <Center>
                        <Button colorScheme="teal" type="submit">Submit</Button>
                    </Center>
                </form>
            </VStack>
        </Center>
    </>
);
};

export default Home;