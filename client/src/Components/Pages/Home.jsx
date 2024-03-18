import React, { useState } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import ChatPage from './ChatPage'; // Import the ChatPage component

import { Center, Input, Button, VStack, Box } from '@chakra-ui/react';

const Home = () => {
  const [input, setInput] = useState('');
  const [workoutData, setWorkoutData] = useState(null); // Add state for workoutData

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = { workout_area: input };
      console.log('Request Data:', requestData);
      const response = await axios.post(
        'http://127.0.0.1:8000/api/workouts/',
        requestData,
        { headers: { 'Content-Type': 'application/json' } }
      );
      console.log(response.data);
      setWorkoutData(response.data); // Store the response data in state
    } catch (error) {
      console.error('Error creating workout:', error.response.data);
    }
  };

  return (
    <>
      <NavBar />
      {workoutData ? ( // Render the ChatPage if workoutData is available
       <ChatPage initialWorkoutData={workoutData} />
      ) : (
        <Center flexDirection="column" h="80vh">
          <VStack spacing={4} w="150%">
            <h1 color="" fontSize="2xl">
              GymGPT
            </h1>
            <form onSubmit={handleSubmit}>
              <Input
                placeholder="What's you training today? e.g. Chest, Back, Legs"
                onChange={handleChange}
              />
              <Box height="1rem" />
              <Center>
                <Button colorScheme="teal" type="submit">
                  Submit
                </Button>
              </Center>
            </form>
          </VStack>
        </Center>
      )}
    </>
  );
};

export default Home;