import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";
interface Props {
  gameId: number;
}
const ScreenShots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenShots(gameId);
  console.log(data);
  if (error) throw error;
  if (isLoading) return null;

  return (
    <SimpleGrid gap={2} columns={{ base: 1, md: 2 }}>
      {data?.results.map((ss) => (
        <Image src={ss.image} alt={ss.id.toString()}></Image>
      ))}
    </SimpleGrid>
  );
};

export default ScreenShots;
