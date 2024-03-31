import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenras, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data: genres, isLoading, error } = useGenras();

  if (isLoading) return <Spinner marginLeft={"15px"}></Spinner>;
  if (error) return null;
  return (
    <List position={"sticky"} top={"10px"}>
      {genres.map((genre) => {
        return (
          <ListItem key={genre.id} marginLeft={"8px"} padding={"8px"}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={"8px"}
              ></Image>
              <Button
                onClick={() => {
                  onSelectGenre(genre);
                }}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                variant={"link"}
                fontSize={"20px"}
                colorScheme={"gray.500"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
}

export default GenreList;
