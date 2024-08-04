import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchDataResponse } from "../services/api-client"
import { Platform } from "./useGames";


// interface Platform {
//     name : string
//     id : number
//     slug : string
// }


const usePlatforms = ()=> {
    return useQuery<FetchDataResponse<Platform>,Error>({
        queryKey : ["platforms"],
        queryFn : ()=> {
            return apiClient.get<FetchDataResponse<Platform>>("/platforms/lists/parents").then(res=>res.data)
        },
        staleTime : 24 * 60 * 60 * 1000,
        initialData : {results : platforms,count : platforms.length}
    })
}

export default usePlatforms