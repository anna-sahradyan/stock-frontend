//?Create New Product
import axios from "axios";
import {API_URL, BACKEND_URL} from "./index";

 export const createProduct = async (formData) => {
    const response = await axios.post(API_URL, formData)
    return response.data.products
}
//?Get All Product
export const getAllProduct = async () => {
    const response = await axios.get(API_URL);
    console.log(response.data)
    return response.data
}


