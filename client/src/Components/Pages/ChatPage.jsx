import React, { useState } from 'react';
import { Box, VStack, Heading, Text, Input, Button } from '@chakra-ui/react';
import axios from 'axios';

const ChatPage = ({ initialWorkoutData }) => {
  const [messages, setMessages] = useState([
    { text: 'What\'s your training today?', isUser: true },
    { text: initialWorkoutData?.workout_area || '', isUser: true },
    { text: initialWorkoutData?.message || '', isUser: false },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() !== '') {
      const userMessage = { text: inputValue, isUser: true };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputValue('');

      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/workouts/',
          { workout_area: inputValue },
          { headers: { 'Content-Type': 'application/json' } }
        );
        const botMessage = { text: response.data.message, isUser: false };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <Box height="100vh" display="flex" flexDirection="column">
      <Heading as="h2" size="lg" textAlign="center" bg="gray.100" p={4}>
        GymGPT Chat
      </Heading>
      <Box flex="1" overflowY="auto" p={4}>
        <VStack spacing={4} align="stretch">
          {messages.map((message, index) => (
            <Box
              key={index}
              bg={message.isUser ? 'gray.200' : 'gray.100'}
              p={3}
              borderRadius="md"
              alignSelf={message.isUser ? 'flex-end' : 'flex-start'}
              maxWidth="80%"
            >
              <Text whiteSpace="pre-line">{message.text}</Text>
            </Box>
          ))}
        </VStack>
      </Box>
      <Box p={4} bg="gray.100">
        <Box display="flex">
          <Input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your message..."
            mr={2}
          />
          <Button colorScheme="teal" onClick={handleSendMessage}>
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatPage;