import {useAuth} from "@trimble-oss/trimble-id-react";

const styles={
    container:{
        display:'flex',
        flexDirection:'column' as const,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:'100%',
        // light gray background
        backgroundColor:'#f1f1f1',
    }
}


const HomePage = () => {
    const {user, logout} = useAuth();

    const handleLogout = async () => {
        await logout();
    }


    return (
        <div style={styles.container}>
            <div className={'card'}>
                {user?.picture && <img src={user.picture} alt={user.name} />}
                <h1>{user?.name}</h1>
                <h2>{user?.email}</h2>
                <p>Welcome to the home page of the example app 🎉</p>
                <button className={'blue'} onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default HomePage;
