import  Platform  from "../entities/Platform";
import  Genre  from "./Genre";
import  Publisher  from "./Publisher";


interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  genres : Genre []
  description_raw: string;
  publishers : Publisher[]

}

export default Game
