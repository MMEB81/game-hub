import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { games, error, isLoading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          "2xl": 5,
        }}
        spacing={"20px"}
        padding={"10px"}
        justifyContent={"center"}
      >
        {isLoading &&
          Skeletons.map((Skeleton) => <GameCardSkeleton></GameCardSkeleton>)}

        {games.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
