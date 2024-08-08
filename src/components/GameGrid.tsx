import {
  Box,
  Button,
  Center,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";
import { Fragment } from "react/jsx-runtime";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
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

          {data?.pages.map((page) => {
            return (
              <Fragment>
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
