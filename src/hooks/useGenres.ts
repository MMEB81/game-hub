import genres from "../data/genres";


export interface Genre {
    id : number;
    name : string;
    image_background : string;
    slug : string

}


 const useGenras =()=> { return  {data : genres , isLoading : false,error : ""}};
 



export default useGenras