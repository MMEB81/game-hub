import { Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributeGrid from "../components/GameAttributeGrid";
import useGameDetail from "../hooks/useGameDetail";
import GameTrailer from "../components/gameTrailer";
import ScreenShots from "../components/ScreenShots";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw new Error();
  return (
    <>
      <Grid
        templateAreas={{ base: `"left" "right"`, md: `"left right"` }}
        templateColumns={{ base: "1fr", md: `1fr 1fr` }}
        gap={5}
      >
        <GridItem area={"left"}>
          <Heading>{game.name}</Heading>
          <ExpandableText maxChar={500}>{game.description_raw}</ExpandableText>
          <GameAttributeGrid game={game}></GameAttributeGrid>
        </GridItem>
        <GridItem area={"right"}>
          <GameTrailer gameId={game.id} />
          <ScreenShots gameId={game.id} />
        </GridItem>
      </Grid>
    </>
  );
};

export default GameDetailPage;
