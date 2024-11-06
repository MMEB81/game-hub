import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import { FetchDataResponse } from "../services/api-client";
import platformService from "../services/platformService";
import { Platform } from "../entities/Platform";
// import { Platform } from "./useGames";



// apiClient.get<FetchDataResponse<Platform>>("/platforms/lists/parents").then(res=>res.data)

const usePlatforms = ()=> {
    return useQuery<FetchDataResponse<Platform>,Error>({
        queryKey : ["platforms"],
        queryFn : platformService.getAll,
        staleTime : ms("24h"),
        initialData : platforms
    })
}

export default usePlatforms