import { Box, Container } from "@chakra-ui/react";
import { TrackCard } from "./trackCard";

interface AllTracksContainerProps {
  tracks?: any;
}

export const AllTracksContainer = ({ tracks }: AllTracksContainerProps) => {
  return (
    <Container>
      <Box
        display={"flex"}
        flexDirection="row"
        flexWrap={"wrap"}
        gap="1em"
        padding={2}
        paddingTop={100}
        height={"250vh"}
      >
        {tracks.map((track: any) => {
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
