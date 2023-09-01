import {useSelector} from "react-redux";
import {selectLoggedIn} from "../../redux/features/auth/authSlice";

export const ShowLogin = ({children}) => {
    const isLoggedIn = useSelector(selectLoggedIn)
    if (isLoggedIn) {
        return {children}
    }
    return null
};
export const ShowLogOut= ({children}) => {
    const isLoggedIn = useSelector(selectLoggedIn)
    if (!isLoggedIn) {
        return {children}
    }
    return null
}