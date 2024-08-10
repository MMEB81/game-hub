import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { Genre } from "../services/genreService";
import getCroppedImageUrl from "../services/image-url";
import useGenres from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

function GenreList({ onSelectGenre, selectedGenreId }: Props) {
  const { data, isLoading, error } = useGenres();

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
