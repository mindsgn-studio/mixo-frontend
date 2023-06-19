import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { RecentRelease } from "./recentRelease";
import { NewArtist } from "./newArtist";

interface HomeContainerProps {
  randomTracks: any;
  newTracks: any;
}

export const HomeContainer = ({
  randomTracks,
  newTracks,
}: HomeContainerProps) => {
  return (
    <>
      <Navigation />
      <Hero randomTracks={randomTracks} />
      <RecentRelease newTracks={newTracks} />
      <Footer />
    </>
  );
};
