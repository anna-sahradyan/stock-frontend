import {combineReducers} from "redux";
import auth from "../redux/features/auth/authSlice";
import product from '../redux/features/product/productSlice';

const rootReducer = combineReducers({
    auth,
    product,
    devTools: true
});
export default rootReducer;