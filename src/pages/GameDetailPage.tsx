import { Heading, Spinner, Text } from "@chakra-ui/react";
import useGameDetail from "../hooks/useGameDetail";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data, isLoading, error } = useGameDetail(slug!);
  if (isLoading) return <Spinner />;
  if (error || !data) throw new Error();
  return (
    <>
      <Heading>{data.name}</Heading>
      <Text>{data.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
