import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api",
    params : {
        key : "0c22b09572d54a53a6dca085f9364820"
    }
})
