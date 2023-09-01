import  {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getLoginStatus} from "../api";
import {SET_LOGIN} from "../redux/features/auth/authSlice";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const useRedirectLoggedOutUser = (path) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        const redirectLoggedOutUser = async () => {
            const isLoggedIn = await
                getLoginStatus();
            dispatch(SET_LOGIN(isLoggedIn));
            if (!isLoggedIn) {
                toast.info("Session expired ,please login to continue.");
                navigate(path);
                return
            }

        };
        redirectLoggedOutUser();
    }, [navigate,path,dispatch])
};

export default useRedirectLoggedOutUser;