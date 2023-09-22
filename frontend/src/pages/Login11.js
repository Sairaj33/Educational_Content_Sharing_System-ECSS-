import React from "react";
import { useState  } from "react";
import WelTs from "../components/WelTs";
import Home11 from "../components/Home11";

function Login11(){
    

    const[teacherlogIn, setteacherlogIn] = useState(false);
    const[teacherUserName, setTeacherUserName] = useState("");

    function invertLog(){
        setteacherlogIn((prev) => {
            return !prev;
        });
    }

    function getUsername(name){
        setTeacherUserName(name);
    }

    return(
        <div>
            {!teacherlogIn ? (<Home11 invertLog={invertLog} getUsername={getUsername}/>) : (<WelTs teacherUserName={teacherUserName}/>)}
        </div>
    );
}


export default Login11;