import { useAudio } from "@/context/audio";
import { Box, Button, Heading, Progress, Text } from "@chakra-ui/react";
import { FaPlay, FaPause, FaHeart, FaList } from "react-icons/fa";

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
      alignItems="center"
      justifyContent="space-between"
      flexDir="row"
      padding={5}
    >
      <Box display="flex" flexDir="row">
        <Box
          width={50}
          height={50}
          borderRadius={10}
          background={`url(${current && current.background})`}
          backgroundSize="100%"
          backgroundPosition="center"
        />
        <Box padding={2}>
          <Heading size="sm">{current && current.title}</Heading>
          <Text size="sm" color="gray.400">
            {current && current.artist}
          </Text>
        </Box>
      </Box>
      <Box>
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          {isPlaying ? (
            <Button background="none" onClick={() => stopMusic()}>
              <FaPause />
            </Button>
          ) : (
            <Button background="none" onClick={() => playMusic()}>
              <FaPlay />
            </Button>
          )}
          <Progress width="500px" size="xs" isIndeterminate />
        </Box>
      </Box>
      <Box>
        <Button background="none">
          <FaHeart />
        </Button>
        <Button background="none">
          <FaList />
        </Button>
      </Box>
    </Box>
  );
};
