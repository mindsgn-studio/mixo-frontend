import { Box } from '@chakra-ui/react';
import Logo from '@/components/logo';
import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
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
      <Logo />
    </>
  );
}
