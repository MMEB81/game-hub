import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./services/genreService";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./services/platformService";
import SortOrderSelector, { Order } from "./components/SortOrderSelector";
import GameHeading from "./components/GameHeading";

// export interface GameQuery {
//   genre: Genre | null;
//   platform: Platform | null;
//   order: Order | null;
//   searchText: string;
//   pageSize: number;
// }

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  order: Order | null;
  searchText: string;
  pageSize: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genreId: undefined,
    platformId: undefined,
    order: {},
    searchText: "",
    pageSize: 9,
  } as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "220px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText: string) => {
            setGameQuery({ ...gameQuery, searchText: searchText });
          }}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"side"} paddingStart={"5px"}>
          <GenreList
            onSelectGenre={(genre: Genre) => {
              setGameQuery({ ...gameQuery, genreId: genre.id });
            }}
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack paddingY={5} marginY={2}>
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform: Platform) => {
                setGameQuery({ ...gameQuery, platformId: platform.id });
              }}
            />
            <SortOrderSelector
              onSelectOrder={(order: Order) => {
                setGameQuery({ ...gameQuery, order: order });
              }}
              selectedOrder={gameQuery.order}
            />
          </HStack>
        </Box>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
