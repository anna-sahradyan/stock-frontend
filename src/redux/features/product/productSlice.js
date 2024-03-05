import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {createProduct} from "../../../api/productService";
import {toast} from "react-toastify";

export const createProductAsyncThunk = createAsyncThunk("product/create", async (formData, thunkAPI) => {
    try {
        return await createProduct(formData)

    } catch (err) {
        const message =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();
        console.log(message);
        return thunkAPI.rejectWithValue(message);

    }
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: null,
        products: [],
        isError: false,
        isSuccess: false,
        isLoading: false,
        message: "",
    },
    reducers: {
        CALC_STORE_VALUE(state, action) {
            console.log('store value')
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createProductAsyncThunk.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(createProductAsyncThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.products.push(action.payload);
            toast.success("Product added successfully");
            console.log(action.payload);
        })
        builder.addCase(createProductAsyncThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload
            toast.error(action.payload);
        })
    }


})

export const {CALC_STORE_VALUE} = productSlice.actions;
export default productSlice.reducer;