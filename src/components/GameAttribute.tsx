import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  heading: string;
  children: ReactNode | ReactNode[];
}
const GameAttribute = ({ heading, children }: Props) => {
  return (
    <>
      <Box>
        <Heading fontSize={"md"} color={"gray"} marginBottom={2} as={"dt"}>
          {heading}
        </Heading>
        <dd>{children}</dd>
      </Box>
    </>
  );
};

export default GameAttribute;
