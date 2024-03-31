import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

function GameGrid({ selectedGenre, selectedPlatform }: Props) {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(selectedGenre, selectedPlatform);
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
        // padding={"10px"}
      >
        {isLoading &&
          Skeletons.map((Skeleton) => (
            <Center key={Skeleton}>
              <GameCardContainer>
                <GameCardSkeleton></GameCardSkeleton>
              </GameCardContainer>
            </Center>
          ))}

        {games.map((game) => {
          return (
            <Box key={game.id} display={"flex"} justifyContent={"center"}>
              <GameCardContainer>
                <GameCard game={game} />
              </GameCardContainer>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
