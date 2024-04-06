import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import ScoreBadge from "./ScoreBadge";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />

      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => {
              return platform;
            })}
          />
          <ScoreBadge metacritic={game.metacritic} />
        </HStack>
        <Heading>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
