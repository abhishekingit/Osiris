import {ChakraProvider, extendTheme} from '@chakra-ui/react';
import Fonts from './Fonts';


const theme = extendTheme({
  fonts: {
    heading: "Inter",
    body: "Inter",
  },
});
// import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>

  ); 
};

export default MyApp;

