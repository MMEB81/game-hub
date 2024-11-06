import axios, { AxiosRequestConfig } from "axios";
export interface FetchDataResponse<T> {
    count: number;
    results: T[];
    next ?: string | null
}
  
const axiosInstance =  axios.create({
    baseURL : "https://api.rawg.io/api",
    params : {
        key : "0c22b09572d54a53a6dca085f9364820"
    }
})

class APIClient<T>{
    endPoint : string;
   
    constructor (endPoint : string) {
        this.endPoint = endPoint
    }
    get = (id:string | number) => {
        return axiosInstance.get<T>(this.endPoint+"/"+id).then(res => res.data)
    }
    getAll = (requestConfig ?: AxiosRequestConfig)=> {
        return axiosInstance
        .get<FetchDataResponse<T>>(this.endPoint,{...requestConfig})
        .then(res=>res.data)
        
    }
}


export default APIClient

