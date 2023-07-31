import { AllTracksContainer } from '@/components/allTracksContainer';
import { Box } from '@chakra-ui/react';
import type { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function Home(props: any) {
  const { tracks } = props;

  return (
    <>
      <Head>
        <title>mixø.xyz | home</title>
        <meta
          name="title"
          content="mixø.xyz — Community owned streaming platform."
        />
        <meta
          name="description"
          content="Allow me to introduce you to mixø, a community-owned streaming service that aims to revolutionize the music industry. At mixø, we believe that music has the power to bring people together and create meaningful connections. That's why we've created a platform that rewards users for streaming music and creators for publishing it."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mixø.xyz" />
        <meta
          property="og:title"
          content="mixø.xyz — Community owned streaming platform."
        />
        <meta
          property="og:description"
          content="Allow me to introduce you to mixø, a community-owned streaming service that aims to revolutionize the music industry. At mixø, we believe that music has the power to bring people together and create meaningful connections. That's why we've created a platform that rewards users for streaming music and creators for publishing it."
        />
        <meta property="og:image" content="/icon-192.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mixø.xyz" />
        <meta
          property="twitter:title"
          content="mixø.xyz — Community owned streaming platform."
        />
        <meta
          property="twitter:description"
          content="Allow me to introduce you to mixø, a community-owned streaming service that aims to revolutionize the music industry. At mixø, we believe that music has the power to bring people together and create meaningful connections. That's why we've created a platform that rewards users for streaming music and creators for publishing it."
        />
        <meta property="twitter:image" content="/icon-192.png" />
      </Head>
      <Box overflowY={'scroll'}>
        <AllTracksContainer tracks={tracks} />
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const randomTracksResponse = await fetch(`${process.env.API}/song/random`, {
    method: 'GET'
  });

  const trackResponse = await fetch(`${process.env.API}/song/all`, {
    method: 'GET'
  });

  const tracks = await trackResponse.json();

  return {
    props: { tracks: tracks.data }
  };
};
