

import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchDataResponse } from "../services/api-client"
import gameService, { Game } from "../services/gameService";


const useGames = (gameQuery : GameQuery)=> useInfiniteQuery<FetchDataResponse<Game>,Error>({
  queryFn : ({pageParam=1})=> {
    return gameService.getAll(
      {params : {
        genres :gameQuery.genre?.id,
        parent_platforms : gameQuery.platform?.id,
        ordering : gameQuery.order?.slug,
        search : gameQuery.searchText,
        search_exact : true ,
        page : pageParam,
        page_size : gameQuery.pageSize}})
  },
  queryKey : ["games",gameQuery],
  staleTime : 5 * 60 * 1000,//5m
  getNextPageParam : (lastPage,allPages )=> {
    return lastPage.next ? allPages.length + 1 : undefined
  },
  // keepPreviousData : true

})
  
export default useGames;

// const useGames = (gameQuery : GameQuery) => useQuery<FetchDataResponse<Game>,Error>({
//   queryKey : ["games",gameQuery],
//   queryFn : ()=> {
//     return gameService.getAll({params : {genres :gameQuery.genre?.id,parent_platforms : gameQuery.platform?.id,ordering : gameQuery.order?.slug,search : gameQuery.searchText,search_exact : true }})
//   }
//   ,staleTime : 5*60*1000//5m
// })


// useData<Game>("/games",{params : {genres :gameQuery.genre?.id,platforms : gameQuery.platform?.id,ordering : gameQuery.order?.slug,search : gameQuery.searchText,search_exact : true }},[gameQuery])