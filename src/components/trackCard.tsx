import { Box, Heading, Text } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import TextTruncate from "react-text-truncate";

interface TrackCardProps {
  title: string;
  artist: string;
  art: string;
}

export const TrackCard = ({ title, artist, art }: TrackCardProps) => {
  return (
    <Box
      cursor={"pointer"}
      position="relative"
      margin="0.2em"
      minW="200px"
      minH="350px"
    >
      <Box
        display={"flex"}
        position="relative"
        flexDir="row"
        as={motion.div}
        borderTopRadius={10}
        height="70%"
        width="100%"
        whileHover={{ backgroundSize: "150%" }}
        background={`linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${art}) `}
        backgroundSize="100%"
        backgroundPosition="center"
      />
      <Box
        position="relative"
        borderBottomRadius={10}
        padding={5}
        background="black"
        display="flex"
        flexDir="row"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Box flex={1}>
          <Text size="sm" color="#929292">
            {artist}
          </Text>
          <Heading size="sm" color="white">
            <TextTruncate line={1} text={title} />
          </Heading>
        </Box>
        <Box
          position="relative"
          padding={2}
          width="3em"
          height={"3em"}
          margin="0.5em"
          borderRadius={10}
          display="flex"
          background="white"
          alignItems="center"
          justifyContent="center"
        >
          <FaPlay size="1.5em" />
        </Box>
      </Box>
      {/*
       */}
    </Box>
  );
};
