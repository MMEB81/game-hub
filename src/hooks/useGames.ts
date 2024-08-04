
import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchDataResponse } from "../services/api-client"
import apiClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top : number
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}



const useGames = (gameQuery : GameQuery) => useQuery<FetchDataResponse<Game>,Error>({
  queryKey : ["games",gameQuery],
  queryFn : ()=> {
    return apiClient
    .get<FetchDataResponse<Game>>("/games",{params : {genres :gameQuery.genre?.id,parent_platforms : gameQuery.platform?.id,ordering : gameQuery.order?.slug,search : gameQuery.searchText,search_exact : true }})
    .then(res=>res.data)
  }
  ,staleTime : 5*60*1000//5m
})
  // useData<Game>("/games",{params : {genres :gameQuery.genre?.id,platforms : gameQuery.platform?.id,ordering : gameQuery.order?.slug,search : gameQuery.searchText,search_exact : true }},[gameQuery])
export default useGames;
