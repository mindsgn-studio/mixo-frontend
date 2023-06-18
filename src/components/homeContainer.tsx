import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { RecentRelease } from "./recentRelease";
import { NewArtist } from "./newArtist";

export const HomeContainer = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <RecentRelease />
      <Footer />
    </>
  );
};
