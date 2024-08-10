import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const selectedGenre = useGenre(gameQuery.genreId);
  const selectedPlatform = usePlatform(gameQuery.platformId);
  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;
  return (
    <Heading paddingY={2} as={"h1"} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
