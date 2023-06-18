import { Box, Heading } from "@chakra-ui/react";
import { trackList } from "@/constants/trackList";
import { TrackCard } from "./trackCard";

export const RecentRelease = () => {
  return (
    <Box width="70%" margin={5} marginLeft={[10, 10, 10, 200]}>
      <Box marginBottom={5}>
        <Heading>Recent Release</Heading>
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
    </Box>
  );
};
