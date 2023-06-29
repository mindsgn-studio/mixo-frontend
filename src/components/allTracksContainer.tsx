import { useState } from "react";
import { SimpleGrid, Container, Box } from "@chakra-ui/react";
import { TrackCard } from "./trackCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { json } from "stream/consumers";

interface AllTracksContainerProps {
  tracks?: any;
}

export const AllTracksContainer = ({ tracks }: AllTracksContainerProps) => {
  const [tracklist, setTrackList] = useState(tracks);

  const getNextPage = async () => {
    fetch(`${process.env.NEXT_PUBLIC_API}/track/all`, {
      method: "GET",
    });
  };

  return (
    <Box>
      <InfiniteScroll
        dataLength={10}
        next={() => getNextPage()}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <Container>
          <SimpleGrid columns={[1, 1, 2, 3]} gap={6} spacing="40px">
            {tracklist.map((track: any) => {
              return (
                <TrackCard
                  key={track.title}
                  artist={track.name}
                  title={track.title}
                  art={track.art}
                />
              );
            })}
          </SimpleGrid>
        </Container>
      </InfiniteScroll>
    </Box>
  );
};
