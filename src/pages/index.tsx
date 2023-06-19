import { Box, Container, Flex } from "@chakra-ui/react";
import { MainContainer } from "@/components/mainContainer";
import { HomeContainer } from "@/components/homeContainer";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export default function Home(props: any) {
  const { randomTracks, newTracks } = props;
  return <HomeContainer randomTracks={randomTracks} newTracks={newTracks} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const randomTracksResponse = await fetch(`${process.env.API}/track/random`, {
    method: "GET",
  });

  const newRandomTracks = await fetch(`${process.env.API}/track/random`, {
    method: "GET",
  });

  const randomTracks = await randomTracksResponse.json();
  const newTracks = await newRandomTracks.json();

  return {
    props: { randomTracks: randomTracks.data, newTracks: newTracks.data },
  };
};
