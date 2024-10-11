import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../services/gameService";
import PlatformIconList from "./PlatformIconList";
import ScoreBadge from "./ScoreBadge";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

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
            platforms={game.parent_platforms?.map(({ platform }) => {
              return platform;
            })}
          />
          <ScoreBadge metacritic={game.metacritic} />
        </HStack>

        <Heading as={"h2"}>
          {game.name + " "} {<Emoji rating_top={game.rating_top} />}
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
