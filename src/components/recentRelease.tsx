import { Box, Heading, Container } from '@chakra-ui/react';
import { trackList } from '@/constants/trackList';
import { TrackCard } from './trackCard';
import Link from 'next/link';

interface RecentReleaseProp {
  newTracks: any;
}

export const RecentRelease = ({ newTracks }: RecentReleaseProp) => {
  return (
    <Container>
      <Box
        marginBottom={5}
        display="flex"
        flexDir={'row'}
        justifyContent="space-between"
        alignItems={'center'}
      >
        <Heading size="md">Recent Release</Heading>
        <Box cursor="pointer">
          <Heading size="md">
            <Link href="/tracks">View All</Link>
          </Heading>
        </Box>
      </Box>

      <Box
        display={'flex'}
        gap={2}
        overflowX={'scroll'}
        minH="450px"
        justifyContent="space-between"
      >
        {newTracks.map((track: any) => {
          return (
            <TrackCard
              key={track.title}
              artist={track.artist[0]}
              title={track.title}
              art={track.artwork}
              background={track.artwork}
              url={track.link}
              uuid={track._id}
            />
          );
        })}
      </Box>
    </Container>
  );
};
