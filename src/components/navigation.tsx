import { Box, Container } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

export const Navigation = () => {
  return (
    <Container>
      <Box
        position={"absolute"}
        zIndex={2}
        padding={5}
        display="flex"
        justifyContent={"space-between"}
        flexDir="row"
      >
        <Heading color="white">MIXØ.XYZ</Heading>
      </Box>
    </Container>
  );
};
