
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchDataResponse } from "../services/api-client"
import genres from "../data/genres";


export interface Genre {
    id : number;
    name : string;
    image_background : string;
    slug : string

}



//  const useGenras =()=> { return  {data : genres , isLoading : false,error : ""}};

 const useGenres = ()=> {
    return useQuery<FetchDataResponse<Genre>,Error>({
        queryKey : ["genres"],
        queryFn : ()=>apiClient.get<FetchDataResponse<Genre>>("/genres").then(res=>res.data),
        staleTime : 24 * 60 * 60 * 1000, //24h
        initialData : {results : genres,count : genres.length}
    })
    
 }

 export default useGenres









