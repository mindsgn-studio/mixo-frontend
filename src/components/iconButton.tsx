import { Box, Heading, Text } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

export const IconButton = () => {
  return (
    <Box
      padding={2}
      width="4em"
      height={"4em"}
      margin="0.5em"
      borderRadius={10}
      display="flex"
      background="white"
      alignItems="center"
      justifyContent="center"
    >
      <FaPlay size="2em" />
    </Box>
  );
};
