import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import ScoreBadge from "./ScoreBadge";

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
          <Link to={`/games/${game.slug}`}>
            {game.name + " "} {<Emoji rating_top={game.rating_top} />}
          </Link>
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
