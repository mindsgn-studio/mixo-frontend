import { Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <Box
      position={"absolute"}
      width={["100vw", "100vw", "85vw", "85vw"]}
      zIndex={2}
      padding={5}
    >
      <Input placeholder="search" width="auto" color="white" />
    </Box>
  );
};
