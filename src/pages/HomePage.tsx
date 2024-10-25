import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortOrderSelector from "../components/SortOrderSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"side main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "220px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area={"side"} paddingStart={"5px"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack paddingY={5} marginY={2}>
            <PlatformSelector />
            <SortOrderSelector />
          </HStack>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
