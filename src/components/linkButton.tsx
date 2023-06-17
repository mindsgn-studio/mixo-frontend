import { Box, Heading, Text } from "@chakra-ui/react";
import { SideNavigationLinks } from "@/constants/sideNavigationLinks";

interface LinkButton {
  name: string;
  link: string;
}

export const LinkButton = ({ name, link }: LinkButton) => {
  return (
    <Box cursor={"pointer"}>
      <Text>{name}</Text>
    </Box>
  );
};
