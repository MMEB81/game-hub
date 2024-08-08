import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const genreName = genres.results.find((genre) => {
    return genre.id === gameQuery.genreId;
  })?.name;
  const platformName = platforms.results.find((platform) => {
    return platform.id === gameQuery.platformId;
  })?.name;
  const heading = `${platformName || ""} ${genreName || ""} Games`;
  return (
    <Heading paddingY={2} as={"h1"} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
}

export default GameHeading;
