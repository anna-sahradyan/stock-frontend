//?Create New Product
import axios from "axios";
import {API_URL} from "./index";

 export const createProduct = async (formData) => {
    const response = await axios.post(API_URL, formData)
    return response.data
}
//?Get All Product
export const getAllProduct = async () => {
    const response = await axios.get(API_URL)
    return response.data
}


