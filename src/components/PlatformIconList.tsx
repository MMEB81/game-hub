import {
  FaWindows,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../services/platformService";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    xbox: FaXbox,
    playstation: FaPlaystation,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms?.map((platform) => {
        return (
          <Icon
            key={platform.id}
            as={iconsMap[platform.slug]}
            color={"gray.500"}
          ></Icon>
        );
      })}
    </HStack>
  );
}

export default PlatformIconList;
