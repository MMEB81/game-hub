import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

function GenreList() {
  const { data, isLoading, error } = useGenres();
  const [selectedGenreId, onSelectGenre] = useGameQueryStore((s) => [
    s.gameQuery.genreId,
    s.onSelectGenre,
  ]);

  if (isLoading) return <Spinner marginLeft={"15px"}></Spinner>;
  if (error) return null;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3} marginLeft={"16px"}>
        Genres
      </Heading>
      {/* position={"sticky"} top={"10px"} */}
      <List>
        {data?.results.map((genre) => {
          return (
            <ListItem key={genre.id} marginLeft={"8px"} padding={"8px"}>
              <HStack>
                <Image
                  src={getCroppedImageUrl(genre.image_background)}
                  boxSize={"32px"}
                  borderRadius={"8px"}
                  objectFit={"cover"}
                ></Image>
                <Button
                  onClick={() => {
                    onSelectGenre(genre);
                  }}
                  fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                  variant={"link"}
                  fontSize={"20px"}
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  colorScheme={"gray.500"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default GenreList;
