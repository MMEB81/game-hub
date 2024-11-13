import { Grid, GridItem, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import GameAttribute from "./GameAttribute";
import ScoreBadge from "./ScoreBadge";

interface Props {
  game: Game;
}
const GameAttributeGrid = ({ game }: Props) => {
  return (
    <Grid
      templateColumns={"1fr 1fr"}
      templateAreas={`"platforms meta" "genres publishers"`}
      gap={5}
      marginTop={5}
      as={"dl"}
    >
      <GridItem area={"platforms"}>
        <GameAttribute heading="Platform">
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </GameAttribute>
      </GridItem>
      <GridItem area={"meta"}>
        <GameAttribute heading="Metascore">
          <ScoreBadge metacritic={game.metacritic} />
        </GameAttribute>
      </GridItem>
      <GridItem area={"genres"}>
        <GameAttribute heading="Genres">
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </GameAttribute>
      </GridItem>
      <GridItem area={"publishers"}>
        <GameAttribute heading="Publishers">
          {game.publishers.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </GameAttribute>
      </GridItem>
    </Grid>
  );
};

export default GameAttributeGrid;
