import useData from "./useData";

export interface Genre {
    id : number;
    name : string;
}


 const useGenras =()=>useData<Genre>("/genres")



export default useGenras