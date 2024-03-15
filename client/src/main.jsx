import * as React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const colors = {
  brand: {
    900: '#1DFA1F2',
    800: '#14171A',
    700: '#657786',
  },
};

const fonts = {
  body: 'Open Sans, system-ui, sans-serif',
  heading: 'Open Sans, system-ui, sans-serif',
};

const theme = extendTheme({ colors, fonts });

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);