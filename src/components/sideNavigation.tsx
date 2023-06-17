import { Box, Heading, Text } from "@chakra-ui/react";
import { SideNavigationLinks } from "@/constants/sideNavigationLinks";
import { LinkButton } from "./linkButton";

export const SideNavigation = () => {
  return (
    <Box padding="1em" height="100vh" width={"200px"}>
      <Heading cursor={"pointer"}>mixø.xyz</Heading>
      {SideNavigationLinks.map((link: any) => {
        return <LinkButton key={link.name} name={link.name} link={link.link} />;
      })}
    </Box>
  );
};
