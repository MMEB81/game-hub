import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

// const useData = <T>(endPoint : string,requestConfig ?: AxiosRequestConfig,deps ?: any)=>{
  
      
//         const [data, setData] = useState<T[]>([]);
//         const [error, setError] = useState("");
//         const [isLoading, setLoading] = useState(false);
      
//         useEffect(() => {
         
//           const controller = new AbortController();
//           setLoading(true);
//           apiClient
//             .get<FetchDataResponse<T>>(endPoint, { signal: controller.signal,...requestConfig})
//             .then((res) => {
//               setData(res.data.results);
//               setLoading(false);
//             })
//             .catch((e) => {
//               if (e instanceof CanceledError) return;
//               setError(e.message);
//               setLoading(false);
//             });
      
//           return () => controller.abort();
//         },deps ? [...deps] : []);
//         return { data, error, isLoading };
  
      
// }

// export default useData