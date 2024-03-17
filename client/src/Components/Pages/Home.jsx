import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';

import { Center, Input, Button, VStack, Box } from '@chakra-ui/react';

const Home = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // async function it is a function that returns a promise
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with input:', input);
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/workouts', {workout_area: input});
        console.log(response.data);
    } catch (error) {
        console.error('Error creating workout:', error);
    }
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