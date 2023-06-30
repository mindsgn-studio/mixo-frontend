import { Container, CircularProgress, Box } from "@chakra-ui/react";

export const AllTracksLoading = () => {
  return (
    <Container>
      <Box
        padding={20}
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress isIndeterminate color="green.300" />
      </Box>
    </Container>
  );
};
