import { Box, Center, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Fragment } from "react/jsx-runtime";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6];
  const fetchedTotalGames = data?.pages.reduce(
    (total, page) => total + page.results.length,
    0
  );

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedTotalGames || 0}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        {error && <Text>{error.message}</Text>}
        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            "2xl": 4,
          }}
          padding={"10px"}
          spacing={6}
        >
          {isLoading &&
            Skeletons.map((Skeleton) => (
              <Center key={Skeleton}>
                <GameCardContainer>
                  <GameCardSkeleton></GameCardSkeleton>
                </GameCardContainer>
              </Center>
            ))}

          {data?.pages.map((page, index) => {
            return (
              <Fragment key={index}>
                {page.results.map((game) => {
                  return (
                    <Box
                      key={game.id}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <GameCardContainer>
                        <GameCard game={game} />
                      </GameCardContainer>
                    </Box>
                  );
                })}
              </Fragment>
            );
          })}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
}

export default GameGrid;
