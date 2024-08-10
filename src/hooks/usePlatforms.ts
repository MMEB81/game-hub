import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { FetchDataResponse } from "../services/api-client"
import platformService, { Platform } from "../services/platformService";
// import { Platform } from "./useGames";



// apiClient.get<FetchDataResponse<Platform>>("/platforms/lists/parents").then(res=>res.data)

const usePlatforms = ()=> {
    return useQuery<FetchDataResponse<Platform>,Error>({
        queryKey : ["platforms"],
        queryFn : platformService.getAll,
        staleTime : 24 * 60 * 60 * 1000,
        initialData : platforms
    })
}

export default usePlatforms