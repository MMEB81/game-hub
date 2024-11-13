import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributeGrid from "../components/GameAttributeGrid";
import useGameDetail from "../hooks/useGameDetail";
import GameTrailer from "../components/gameTrailer";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw new Error();
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText maxChar={500}>{game.description_raw}</ExpandableText>
      <GameAttributeGrid game={game}></GameAttributeGrid>
      <GameTrailer gameId={game.id} />
    </>
  );
};

export default GameDetailPage;
