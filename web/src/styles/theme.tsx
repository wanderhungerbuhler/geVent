import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      "400": "#6C5DD3",
      "300": "#3E8CFF",
      "200": "#54545A",
      "100": "#9798A5",
      "50": "#FFFFFF",
    },
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif'
  },
  styles: {
    global: {
      body: {
        bg: "#FFFFFF",
        // color: "gray.50",
      },
    }
  }
})

export default theme;
