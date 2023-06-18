import { Box, Flex, Heading, Text, Container } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      width="100%"
      display={"flex"}
      flexDirection={"row"}
      height="200px"
      justifyContent={"space-between"}
      background="#F5F5F5"
      padding={"3rem"}
    >
      <Container>
        <Heading>MIXØ.XYZ</Heading>
        <Box>
          <Text>
            Copyright &copy; 2023 MINDSGN STUDIO PTY LTD. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
