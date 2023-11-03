import {useAuth} from "@trimble-oss/trimble-id-react";
import {useNavigate} from "react-router-dom";

const LogoutCallbackPage = () => {
    const {isAuthenticated,isLoading}=useAuth();
    const navigate=useNavigate();

    if(!isAuthenticated && !isLoading){
        navigate('/login');
    }
    if(isAuthenticated && !isLoading){
        navigate('/');
    }

    return (
        <div>
            Login out user...
        </div>
    );
};

export default LogoutCallbackPage;
