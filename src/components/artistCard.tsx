import { Box, Heading, Text } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

interface HeroLinks {
  title: string;
  link: string;
  artist: string;
  profile: string;
}

export const ArtistCard = ({ title, artist, profile, link }: HeroLinks) => {
  return (
    <Box position={"relative"}>
      <Box
        position={"relative"}
        padding="2rem"
        width="200px"
        height="0px"
        filter={"blur(2px) opacity(0.7);"}
        background={`linear-gradient(rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 1)), url(${profile}) `}
        backgroundSize="cover"
      />
    </Box>
  );
};
