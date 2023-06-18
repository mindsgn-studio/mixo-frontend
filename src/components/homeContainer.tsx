import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { CommunityCard } from "./CommunityCard";
import { RecentRelease } from "./recentRelease";
import { NewArtist } from "./newArtist";

export const HomeContainer = () => {
  return (
    <Box position={"absolute"} right={0} width={"100vw"}>
      <Navigation />
      <Hero />
      <RecentRelease />
      <Footer />
    </Box>
  );
};
