import React, { useState, useEffect } from 'react';
import { useAudio } from '@/context/audio';
import { Box, Button, Heading, Progress, Text } from '@chakra-ui/react';
import { FaPlay, FaPause, FaHeart } from 'react-icons/fa';

import TextTruncate from 'react-text-truncate';

const Player = () => {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const { isPlaying, playMusic, pauseMusic, stopMusic, current } = useAudio();

  const download = (path: string, filename: string) => {
    const anchor = document.createElement('a');
    anchor.href = path;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const like = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/song/like/${
        current && current.uuid
      }/hduwe78y7y473t6346t43r5r35`,
      {
        method: 'POST'
      }
    );

    const data = await response.json();
    const { liked } = data;
    setIsLiked(liked);
  };

  const getLike = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/song/like/${
        current && current.uuid
      }/hduwe78y7y473t6346t43r5r35`,
      {
        method: 'GET'
      }
    );

    const data = await response.json();

    if (data.liked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  };

  useEffect(() => {
    if (current) {
      setArtist(`${current.artist}`);
      setTitle(`${current.title}`);
      getLike();
    }
  }, [current]);

  return (
    <Box
      display={isPlaying || current ? 'flex' : 'none'}
      flexDir={'column'}
      background="white"
      width="100vw"
      position="fixed"
      bottom="0%"
      zIndex={10}
    >
      <Progress width="100%" size="xs" isIndeterminate />
      <Box
        flex={1}
        display={'flex'}
        width="100%"
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
                <Button background="none" onClick={() => pauseMusic()}>
                  <FaPause />
                </Button>
              ) : (
                <Button background="none" onClick={() => playMusic()}>
                  <FaPlay />
                </Button>
              )}

              {isLiked ? (
                <Button background="none" onClick={() => like()}>
                  <FaHeart color="green" />
                </Button>
              ) : (
                <Button background="none" onClick={() => like()}>
                  <FaHeart />
                </Button>
              )}
            </Box>
          </Box>
        </Box>
        <Box display="none">
          <audio id="myAudio" />
        </Box>
      </Box>
    </Box>
  );
};

export default Player;
