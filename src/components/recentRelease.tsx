import { Box, Heading, Container } from "@chakra-ui/react";
import { trackList } from "@/constants/trackList";
import { TrackCard } from "./trackCard";

interface RecentReleaseProp {
  newTracks: any;
}

export const RecentRelease = ({ newTracks }: RecentReleaseProp) => {
  return (
    <Container>
      <Box marginBottom={5}>
        <Heading size="md">Recent Release</Heading>
      </Box>

      <Box display={"flex"} gap={2} overflowX={"scroll"} minH="450px">
        {newTracks.map((track: any) => {
          return (
            <TrackCard
              key={track.title}
              artist={track.name}
              title={track.title}
              art={track.art}
            />
          );
        })}
      </Box>
    </Container>
  );
};
