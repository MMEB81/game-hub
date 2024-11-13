import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from "../assets/logo.webp";

function NavBar() {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Link to={"/"}>
        <Image objectFit={"contain"} src={logo} boxSize={"60px"}></Image>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
