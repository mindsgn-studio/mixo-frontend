import { Box, Container } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <Box
      position={"absolute"}
      zIndex={2}
      padding={5}
      display="flex"
      justifyContent={"space-between"}
      flexDir="row"
      marginLeft={200}
      marginRight={200}
    >
      <Heading color="white" size="md">
        MIXØ.XYZ
      </Heading>
    </Box>
  );
};
