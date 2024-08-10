
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import { FetchDataResponse } from "../services/api-client";
import genreService, { Genre } from "../services/genreService";



// apiClient.get<FetchDataResponse<Genre>>("/genres").then(res=>res.data)

//  const useGenras =()=> { return  {data : genres , isLoading : false,error : ""}};

 const useGenres = ()=> {
    return useQuery<FetchDataResponse<Genre>,Error>({
        queryKey : ["genres"],
        queryFn : genreService.getAll,
        staleTime : ms("24h"),
        initialData : genres
    })
    
 }

 export default useGenres









