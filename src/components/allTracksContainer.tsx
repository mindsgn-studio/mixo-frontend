import { useEffect, useState } from "react";
import { SimpleGrid, Container, Box } from "@chakra-ui/react";
import { TrackCard } from "./trackCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { AllTracksLoading } from "@/components/allTracksLoading";

interface AllTracksContainerProps {
  tracks?: any;
}

export const AllTracksContainer = ({ tracks }: AllTracksContainerProps) => {
  console.log(tracks);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(10);
  const [tracklist, setTrackList] = useState(tracks);

  const getNextPage = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}/track/all?page=${page + 1}`,
        {
          method: "GET",
        }
      );

      const results = await response.json();
      setPage(results.currentPage);
      if (results.currentPage === results.totalPages) setHasMore(false);
      const newTracklist = [...tracklist, ...results.data];
      setTrackList(newTracklist);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <InfiniteScroll
        dataLength={tracklist.length}
        next={getNextPage}
        hasMore={hasMore}
        loader={<AllTracksLoading key={0} />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Container>
          <SimpleGrid
            marginTop={100}
            columns={[1, 1, 2, 3]}
            gap={6}
            spacing="40px"
          >
            {tracklist.map((track: any, index: number) => {
              return (
                <TrackCard
                  key={`${track._id}-${index}`}
                  artist={track.name}
                  title={track.title}
                  art={track.art}
                  url={track.link}
                  background={track.art}
                  uuid={track._id}
                />
              );
            })}
          </SimpleGrid>
        </Container>
      </InfiniteScroll>
    </Box>
  );
};
