import { Box, Heading, Text } from "@chakra-ui/react";
import { SideNavigationLinks } from "@/constants/sideNavigationLinks";
import { LinkButton } from "./linkButton";

export const SideNavigation = () => {
  return (
    <Box
      display={["none", "none", "flex", "flex"]}
      position="fixed"
      flexDirection={"column"}
      padding="1em"
      height="100vh"
      width={["100vw", "100vw", "2vw", "15vw"]}
      background="white"
      zIndex={3}
    >
      <Heading display={["none", "none", "none", "flex"]} cursor={"pointer"}>
        mixø.xyz
      </Heading>
      <Box display={["none", "none", "none", "flex"]} flexDirection="column">
        {SideNavigationLinks.map((link: any) => {
          return (
            <LinkButton key={link.name} name={link.name} link={link.link} />
          );
        })}
      </Box>
    </Box>
  );
};
