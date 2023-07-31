import { Box } from '@chakra-ui/react';
import { Hero } from '@/components/hero';
import { RecentRelease } from './recentRelease';

interface HomeContainerProps {
  randomTracks: any;
  newTracks: any;
}

export const HomeContainer = ({
  randomTracks,
  newTracks
}: HomeContainerProps) => {
  return <RecentRelease newTracks={newTracks} />;
};
