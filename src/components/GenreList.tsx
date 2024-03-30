import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenras from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

function GenreList() {
  const { data: genres, isLoading, error } = useGenras();
  if (isLoading) return <Spinner marginLeft={"15px"}></Spinner>;
  if (error) return null;
  return (
    <List position={"sticky"} top={"10px"}>
      {genres.map((genre) => {
        return (
          <ListItem marginLeft={"8px"} padding={"8px"}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={"8px"}
              ></Image>
              <Text fontSize={"20px"} colorScheme={"gray.500"}>
                {genre.name}
              </Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
}

export default GenreList;
