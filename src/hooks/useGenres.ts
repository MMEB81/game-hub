
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import { FetchDataResponse } from "../services/api-client";
import genreService from "../services/genreService";
import { Genre } from "../entities/Genre";



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









