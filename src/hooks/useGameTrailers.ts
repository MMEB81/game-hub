import { useQuery } from "@tanstack/react-query"
import ms from "ms"
import APIClient, { FetchDataResponse } from "../services/api-client"
import { GameTrailer } from "../entities/GameTrailer"


const useGameTrailers = (gameId : number) => {
const apiClient = new APIClient<GameTrailer>(`/games/${gameId}/movies`)

    

    return useQuery<FetchDataResponse<GameTrailer>,Error>({
        queryKey : ["games",gameId,"movies"],
        queryFn :  apiClient.getAll,
        staleTime : ms("24h")
    })
    

}

export default useGameTrailers