import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box
      width="100%"
      flexDirection={"row"}
      height="200px"
      justifyContent={"space-between"}
      background="#F5F5F5"
      padding={"1rem"}
    >
      <Box>
        <Heading>MIXØ.XYZ</Heading>
        <Box>
          <Text>
            Copyright 2023 MINDSGN STUDIO PTY LTD. All rights reserved.
          </Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={2}>
        <Box>Andriod App</Box>
        <Box>Company</Box>
        <Box>Resources</Box>
      </Box>
    </Box>
  );
};
