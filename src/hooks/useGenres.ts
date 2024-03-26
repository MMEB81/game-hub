import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id : number;
    name : string;
}

interface FetchGenreResponse {
    count : number;
    results : Genre[]
}

 const useGenras =()=>{
    const [genres,setGenras] = useState<Genre[]>([]);
    const [error,setError]  = useState("");
    const [isLoading,setLoading] = useState(false);

    useEffect(()=>{
        const controller = new AbortController()
        setLoading(true)
        apiClient.get<FetchGenreResponse>("/genres",{signal : controller.signal}).then((res)=> {
            setGenras(res.data.results)
            setLoading(false)
        }).catch(e=>{
            if(e instanceof CanceledError) return
            setError(e.message)
            setLoading(false)
        }
        )
    
        return ()=>{controller.abort()}
    })

   return {genres, error,isLoading}

}
export default useGenras