
import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchDataResponse } from "../services/api-client"
import gameService from "../services/gameService";
import  Game  from "../entities/Game";
import ms from "ms";
import useGameQueryStore from "../store";


const useGames = ()=> {
  const gameQuery = useGameQueryStore(s => s.gameQuery)
  return useInfiniteQuery<FetchDataResponse<Game>,Error>({
  queryFn : ({pageParam=1})=> {
    return gameService.getAll(
      {params : {
        genres :gameQuery.genreId,
        parent_platforms : gameQuery.platformId,
        ordering : gameQuery.order?.slug,
        search : gameQuery.searchText,
        search_exact : true ,
        page : pageParam,
        page_size : gameQuery.pageSize}})
  },
  queryKey : ["games",gameQuery],
  staleTime : ms("24h"),
  getNextPageParam : (lastPage,allPages )=> {
    return lastPage.next ? allPages.length + 1 : undefined
  },
  // keepPreviousData : true

})}
  
export default useGames;

// const useGames = (gameQuery : GameQuery) => useQuery<FetchDataResponse<Game>,Error>({
//   queryKey : ["games",gameQuery],
//   queryFn : ()=> {
//     return gameService.getAll({params : {genres :gameQuery.genre?.id,parent_platforms : gameQuery.platform?.id,ordering : gameQuery.order?.slug,search : gameQuery.searchText,search_exact : true }})
//   }
//   ,staleTime : 5*60*1000//5m
// })


// useData<Game>("/games",{params : {genres :gameQuery.genre?.id,platforms : gameQuery.platform?.id,ordering : gameQuery.order?.slug,search : gameQuery.searchText,search_exact : true }},[gameQuery])