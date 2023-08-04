import {combineReducers} from "redux";
import auth from "../redux/features/auth/authSlice";

const rootReducer = combineReducers({
    auth,
    devTools: true
});
export default rootReducer;