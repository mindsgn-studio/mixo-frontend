import { Box } from "@chakra-ui/react";
import { SideNavigation } from "@/components/sideNavigation";
import { HomeContainer } from "@/components/homeContainer";

export const MainContainer = () => {
  return (
    <Box display={"flex"} flexDirection="row" width="100vw">
      <SideNavigation />
      <HomeContainer />
    </Box>
  );
};
