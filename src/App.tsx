import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortOrderSelector, { Order } from "./components/SortOrderSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  order: Order | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"side"} paddingStart={"5px"}>
          <GenreList
            onSelectGenre={(genre: Genre) => {
              setGameQuery({ ...gameQuery, genre: genre });
            }}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack marginBottom={"10px"}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform: Platform) => {
              setGameQuery({ ...gameQuery, platform: platform });
            }}
          />
          <SortOrderSelector
            onSelectOrder={(order: Order) => {
              setGameQuery({ ...gameQuery, order: order });
            }}
            selectedOrder={gameQuery.order}
          />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
