import {Outlet, useNavigate} from "react-router-dom";
import {TIDProvider} from "@trimble-oss/trimble-id-react";
import client from "./client/client.ts";

function App() {
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate('/')
    }
    return (
        <TIDProvider tidClient={client} onRedirectCallback={handleRedirect}>
            <Outlet/>
        </TIDProvider>
    )
}

export default App
