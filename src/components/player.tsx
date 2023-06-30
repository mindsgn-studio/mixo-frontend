import { useAudio } from "@/context/audio";
import { Box, Button, Heading } from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";

export const Player = () => {
  const { isPlaying, playMusic, stopMusic, current } = useAudio();
  return (
    <Box
      zIndex={2}
      width="100vw"
      position="fixed"
      background="white"
      height="100px"
      bottom="0%"
      display={isPlaying || current ? "flex" : "none"}
      flexDir="row"
      padding={10}
    >
      <Box display="flex" flexDir="row">
        <Box
          width={50}
          height={50}
          background={`url(${current && current.background})`}
          backgroundSize="100%"
          backgroundPosition="center"
        />
        <Box>
          <Heading size="sm">{current && current.title}</Heading>
          <Heading size="sm">{current && current.artist}</Heading>
        </Box>
      </Box>
      <Box>
        {isPlaying ? (
          <Button onClick={() => stopMusic()}>
            <FaPause />
          </Button>
        ) : (
          <Button onClick={() => playMusic()}>
            <FaPlay />
          </Button>
        )}
      </Box>
    </Box>
  );
};
