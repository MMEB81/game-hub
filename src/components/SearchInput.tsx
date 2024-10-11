import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

function SearchInput() {
  const [searchText, setSearchText] = useState("");
  const onSearch = useGameQueryStore((s) => s.onSearch);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(searchText);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents={"none"}>
          <BsSearch />
        </InputLeftElement>
        <Input
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
          borderRadius={"20px"}
          variant={"filled"}
          placeholder="Search games..."
          type="text"
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
