import React, { useState } from "react";
import { useAudio } from "@/context/audio";
import { Box, Button, Heading, Progress, Text } from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";

import TextTruncate from "react-text-truncate";

const Player = () => {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const { isPlaying, playMusic, stopMusic, current } = useAudio();

  const download = (path: string, filename: string) => {
    const anchor = document.createElement("a");
    anchor.href = path;
    anchor.download = filename;

    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);
  };

  React.useEffect(() => {}, [current]);

  return (
    <Box
      zIndex={2}
      width="100vw"
      position="fixed"
      background="white"
      bottom="0%"
      display={isPlaying || current ? "flex" : "none"}
      alignItems="center"
      justifyContent="space-between"
      flexDir="row"
      padding={2}
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
        <Box padding={2} width="200px">
          <Heading size="sm">
            <TextTruncate line={1} text={`${title}`} />
          </Heading>
          <Text size="sm" color="gray.400">
            <TextTruncate line={1} text={`${artist}`} />
          </Text>
        </Box>
      </Box>
      <Box>
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box margin={2}>
            {isPlaying ? (
              <Button background="none" onClick={() => stopMusic()}>
                <FaPause />
              </Button>
            ) : (
              <Button background="none" onClick={() => playMusic()}>
                <FaPlay />
              </Button>
            )}
          </Box>
          <Box margin={2}>
            <Progress width="500px" size="xs" isIndeterminate />
          </Box>
        </Box>
      </Box>
      <Box></Box>
      <Box display="none">
        <audio id="myAudio" />
      </Box>
    </Box>
  );
};

export default Player;
