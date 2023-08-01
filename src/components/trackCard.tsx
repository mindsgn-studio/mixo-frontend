import { Box, Heading, Text } from '@chakra-ui/react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useAudio } from '@/context/audio';

interface TrackCardProps {
  title: string;
  artist: string;
  art: string;
  url: string;
  uuid: string;
  background: string;
  source?: string;
}

export const TrackCard = ({
  title,
  artist,
  art,
  url,
  uuid,
  background,
  source
}: TrackCardProps) => {
  const { loadMusic, current, isPlaying, stopMusic, pauseMusic } = useAudio();

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength - 3) + '...';
    }
  };

  return (
    <Box
      cursor={'pointer'}
      position="relative"
      margin="0.2em"
      minWidth="300px"
      height="350px"
    >
      <Box
        display={'flex'}
        position="relative"
        flexDir="row"
        as={motion.div}
        borderTopRadius={10}
        height="70%"
        width="100%"
        whileHover={{ backgroundSize: '150%' }}
        alignItems={'flex-end'}
        justifyContent={'flex-end'}
        background={`linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${art}) `}
        backgroundSize="100%"
        backgroundPosition="center"
      >
        {current && current.uuid === uuid && isPlaying ? (
          <Box
            position="relative"
            padding={2}
            width="3em"
            height={'3em'}
            margin="0.5em"
            borderRadius={10}
            display="flex"
            background="white"
            alignItems="center"
            justifyContent="center"
            onClick={() => pauseMusic()}
          >
            <FaPause color="black" size="1.5em" />
          </Box>
        ) : (
          <Box
            position="relative"
            padding={2}
            width="3em"
            height={'3em'}
            margin="0.5em"
            borderRadius={10}
            display="flex"
            background="white"
            alignItems="center"
            justifyContent="center"
            onClick={() => loadMusic(url, artist, title, background, uuid)}
          >
            <FaPlay color="black" size="1.5em" />
          </Box>
        )}
      </Box>
      <Box
        position="relative"
        borderBottomRadius={10}
        padding={5}
        background="black"
        display="flex"
        flexDir="row"
        alignItems="center"
        justifyContent={'space-between'}
      >
        <Box flex={1} padding={2}>
          <Heading size="sm" color="#fff">
            {truncateText(title, 20)}
          </Heading>
          <Text fontWeight={'light'} size="sm" color="#737373">
            {truncateText(artist, 10)}
          </Text>
        </Box>
        {source ? (
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            backgroundColor={'#fff'}
            width="60px"
            borderRadius={20}
            margin={'5px'}
          >
            <Text fontWeight={'bold'} fontSize={8} color="#000">
              {source}
            </Text>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};
