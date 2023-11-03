import {createBrowserRouter} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage.tsx";
import App from "../App.tsx";
import {AuthenticationGuard} from "@trimble-oss/trimble-id-react";
import HomePage from "../pages/HomePage/HomePage.tsx";
import CallbackPage from "../pages/CallbackPage/CallbackPage.tsx";
import LogoutCallbackPage from "../pages/LogoutCallbackPage/LogoutCallbackPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App/>
        ),
        children: [
            {
                index:true,
                element: (
                    <AuthenticationGuard renderComponent={<HomePage/>}/>
                ),
            },
            {
                path: "/callback",
                element: (
                    <CallbackPage/>
                )

            },
            {
                path: "/logout-callback",
                element: (
                    <LogoutCallbackPage/>
                )
            },
            {
                path: "/login",
                element: (
                    <LoginPage/>
                )
            },
        ]
    },
]);

export default router;
