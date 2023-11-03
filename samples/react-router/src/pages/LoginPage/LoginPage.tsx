import {useAuth} from "@trimble-oss/trimble-id-react";
import {useNavigate} from "react-router-dom";

const styles = {
    root: {
        display: "flex",
        flexDirection: "column" as const,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    container:{
        textAlign:'center' as const,
        maxWidth:'600px',
    },
    logo: {
        width: "100px",
    },
    title: {
        color: "#11181C",
        fontSize: "48px",
        fontWeight: 500,
        margin: 0,
        marginTop: '1rem'
    }
}

const LoginPage = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth()
    const navigate = useNavigate();

    const handleLogin = async () => {
        if(!isAuthenticated) await loginWithRedirect();
    }

    const handleGoHome = () => {
        if(isAuthenticated) navigate('/');
    }


    return (
        <div style={styles.root}>
            <div style={styles.container}>
                <img src={'./logo.svg'} alt={'Trimble Logo'} style={styles.logo}/>
                <h1 style={styles.title}>React router example</h1>
                <p>
                    This is an example of a React application using the <a href={'https://reactrouter.com/'}>React Router</a> library
                    and <a href={'https://bitbucket.trimble.tools/projects/TCSDK/repos/tcp-identity-sdk-react/browse'}>Trimble Identity SDK for React</a>.
                </p>
                {isAuthenticated && <button onClick={handleGoHome}>Go Home</button>}
                {!isAuthenticated && <button className={'blue'} onClick={handleLogin}>Login</button>}
            </div>
        </div>
    );
};

export default LoginPage;
