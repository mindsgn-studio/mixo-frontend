import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AudioProvider } from '@/context/audio';
import type { AppProps } from 'next/app';
import { ChakraProvider, Box, Grid, GridItem } from '@chakra-ui/react';
import theme from '@/theme';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import dynamic from 'next/dynamic';
import { SideNavigation } from '@/components/sideNavigation';

const Player = dynamic(() => import('@/components/player'), {
  ssr: false
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AudioProvider>
        <Box width="100vw" height="100vh">
          <SideNavigation />
          <Box>
            <Navigation />
            <Component {...pageProps} />
            <Footer />
          </Box>
        </Box>
        <Player />
      </AudioProvider>
    </ChakraProvider>
  );
}
