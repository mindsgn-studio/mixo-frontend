import { Box, Heading, Container } from "@chakra-ui/react";
import { trackList } from "@/constants/trackList";
import { TrackCard } from "./trackCard";

export const RecentRelease = () => {
  return (
    <Container>
      <Box marginBottom={5}>
        <Heading size="md">Recent Release</Heading>
      </Box>

      <Box display={"flex"} gap={2} overflowX={"scroll"} minH="450px">
        {trackList.map((track) => {
          return (
            <TrackCard
              key={track.title}
              artist={track.artist}
              title={track.title}
              art={track.art}
            />
          );
        })}
      </Box>
    </Container>
  );
};
