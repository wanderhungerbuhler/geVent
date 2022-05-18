import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'

import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme';

import { Router } from '../src/routes/index.routes';

import { AuthProvider } from './hooks/authContext';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ChakraProvider>
  );
}
