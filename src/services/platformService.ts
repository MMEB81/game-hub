
import APIClient from "./api-client";

export interface Platform {
    name : string
    id : number
    slug : string
}
export default new APIClient<Platform>("/platforms/lists/parents")