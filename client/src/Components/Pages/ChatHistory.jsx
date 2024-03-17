import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

const ChatHistory = () => {
  const [workoutHistory, setWorkoutHistory] = useState([]);

  /*
    - Fetch workout history from the server when the component mounts.
    - callback is called after the component is mounted.
  */
  useEffect(() => {
    const fetchWorkoutHistory = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/workouts');
        setWorkoutHistory(response.data);
      } catch (error) {
        console.error('Error fetching workout history:', error);
      }
    };

    fetchWorkoutHistory();
  }, []);

  return (
    <Box p={6} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Heading size="xl" mb={4}>
        Workout History
      </Heading>
      {workoutHistory.length === 0 ? (
        <Text>No workout history available.</Text>
      ) : (
        <UnorderedList spacing={4}>
          {workoutHistory.map((workout, index) => (
            <ListItem key={index}>
              <Heading size="md">{workout.workout_area}</Heading>
              <Text>{workout.suggestions}</Text>
            </ListItem>
          ))}
        </UnorderedList>
      )}
    </Box>
  );
};

export default ChatHistory;