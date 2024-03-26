import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

function GameGrid() {
  const { data: games, error, isLoading } = useGames();
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
      >
        {isLoading &&
          Skeletons.map((Skeleton) => (
            <Center>
              <GameCardContainer>
                <GameCardSkeleton key={Skeleton}></GameCardSkeleton>
              </GameCardContainer>
            </Center>
          ))}

        {games.map((game) => {
          return (
            <Box display={"flex"} justifyContent={"center"}>
              <GameCardContainer>
                <GameCard key={game.id} game={game} />
              </GameCardContainer>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
