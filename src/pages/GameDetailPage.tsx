import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGameDetail from "../hooks/useGameDetail";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useGameDetail(slug!);
  if (isLoading) return <Spinner />;
  if (error || !data) throw new Error();
  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpandableText maxChar={500}>{data.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
