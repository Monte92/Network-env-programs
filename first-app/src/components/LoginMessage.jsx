import { useState } from "react";

export default function LoginMessage({ isLoggedIn }) {

    const [logInStatus, setLogInStatus] = useState(false);

    const toggleLogIn = () => {
        if(logInStatus === true) {
            setLogInStatus(false) 
        } else {
            setLogInStatus(true);
        }
    };

    return (
        <div>
            <h1>LoginMessage</h1> 
            <h2>{logInStatus ? "Welcome back!" : "Please log in."}</h2>
            <button onClick={toggleLogIn}>Log {!logInStatus ? "In" : "out"}</button>
        </div>
    );
}