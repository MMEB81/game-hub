import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map(({ platform }) => {
            return platform;
          })}
        />
      </CardBody>
    </Card>
  );
}

export default GameCard;
