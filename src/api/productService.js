//?Create New Product
import axios from "axios";
import {API_URL} from "./index";

 export const createProduct = async (formData) => {
    const response = await axios.post(API_URL, formData)
    return response.data
}

