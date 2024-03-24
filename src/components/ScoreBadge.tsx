import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

function ScoreBadge({ metacritic: score }: Props) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      borderRadius={4}
      paddingY={1}
      paddingX={3}
      colorScheme={color}
      fontSize={"14px"}
      variant={"subtle"}
    >
      {score}
    </Badge>
  );
}

export default ScoreBadge;
