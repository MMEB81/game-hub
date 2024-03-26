import { List, ListItem, Text } from "@chakra-ui/react";
import useGenras, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";

function GenreList() {
  const { data: genres } = useGenras();
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
