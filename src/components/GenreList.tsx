import { List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function GenreList() {
  const { genres } = useGenres();
  return (
    <List>
      {genres.map((genre) => {
        return (
          <ListItem>
            <Text>{genre.name}</Text>
          </ListItem>
        );
      })}
    </List>
  );
}

export default GenreList;
