import { Box } from "@chakra-ui/react";
import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export const HomeContainer = () => {
  return (
    <Box>
      <Navigation />
      <Hero />
      <Footer />
    </Box>
  );
};
