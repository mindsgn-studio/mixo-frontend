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
        <Grid
          templateAreas={`"nav header"
            "nav main"
                  "nav footer"`}
          gridTemplateRows={'50px 1fr 30px'}
          gridTemplateColumns={'150px 1fr'}
          h="200px"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem
            pl="2"
            area={'nav'}
            display={['none', 'none', 'none', 'flex']}
            flexDirection="column"
          >
            <SideNavigation />
          </GridItem>
          <GridItem pl="2" area={'header'}>
            <Navigation />
          </GridItem>
          <GridItem pl="2" area={'main'}>
            <Component {...pageProps} />
          </GridItem>
          <GridItem pl="2" area={'footer'}>
            <Footer />
          </GridItem>
        </Grid>
        <Player />
      </AudioProvider>
    </ChakraProvider>
  );
}
