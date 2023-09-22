import React from "react";
import { useState  } from "react";
import WelAd from "../components/WelAd";
import Home from "../components/Home";

function Login(){
    const[loggedIn, setLoggedIn] = useState(false);

    function invertLog(){
        setLoggedIn((prev) => {
            return !prev;
        });
    }
    return(
        <div>
            {!loggedIn ? (<Home invertLog={invertLog}/>) : (<WelAd/>)}
        </div>
    );
}


export default Login;