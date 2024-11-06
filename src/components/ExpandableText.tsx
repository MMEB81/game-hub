import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}
const ExpandableText = ({ children, maxChar = 300 }: Props) => {
  const [isExpanded, setExpanded] = useState<boolean>(false);

  if (!children) return null;
  if (children.length <= maxChar) return <Text>{children}</Text>;
  return (
    <Text>
      {isExpanded ? children : children.substring(0, maxChar) + "..."}
      <Button
        onClick={() => {
          setExpanded(!isExpanded);
        }}
        marginLeft={2}
        colorScheme={"yellow"}
        fontWeight={"bold"}
        size={"xs"}
        color="gray.900"
      >
        Show {isExpanded ? "Less" : "More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
