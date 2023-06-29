import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AudioProvider } from "@/context/audio";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Player } from "@/components/player";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AudioProvider>
        <Navigation />
        <Component {...pageProps} />
        <Player />
        <Footer />
      </AudioProvider>
    </ChakraProvider>
  );
}
