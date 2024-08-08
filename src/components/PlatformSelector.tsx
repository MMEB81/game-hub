import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../services/platformService";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

function PlatformSelector({ onSelectPlatform, selectedPlatformId }: Props) {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} size={"md"}>
        {data.results.reduce((res, platform) => {
          if (platform.id === selectedPlatformId) res = platform.name;
          return res;
        }, "") || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.results.map((platform) => (
          <MenuItem
            onClick={() => {
              onSelectPlatform(platform);
            }}
            key={platform.id}
            value={platform.name}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
