import axios from "axios";
import { getItem } from "../persist-storage";

export const BASE_URL = "";
// export const BASE_URL = "http://192.168.1.107:8000";

export const getToken = async () => {
    const user = await getItem("user");
    return JSON.parse(user).token
}

export const getUser = async () => {
    const user = await getItem("user");
    return JSON.parse(user)
}

export const fetchAPI = async (method, api, data, headers=null, params=null) => {
    var config = {
        method,
        url: `${BASE_URL}/api/${api}`,
        headers: headers ? 
        {
            "Authorization":'Bearer '+await getToken()
        }
        :null,
        data,
        params
    }
    console.log("config", config)
    return await axios(config);
}