
import { useQuery } from "@tanstack/react-query";
import { FetchDataResponse } from "../services/api-client"
import genres from "../data/genres";
import genreService, { Genre } from "../services/genreService";





// apiClient.get<FetchDataResponse<Genre>>("/genres").then(res=>res.data)

//  const useGenras =()=> { return  {data : genres , isLoading : false,error : ""}};

 const useGenres = ()=> {
    return useQuery<FetchDataResponse<Genre>,Error>({
        queryKey : ["genres"],
        queryFn : genreService.getAll,
        staleTime : 24 * 60 * 60 * 1000, //24h
        initialData : genres
    })
    
 }

 export default useGenres









