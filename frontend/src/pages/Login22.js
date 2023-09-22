import React from "react";
import { useState  } from "react";
import WelStu from "../components/WelStu";
import Home22 from "../components/Home22";

function Login22(){


    const[studentlogIn, setstudentlogIn] = useState(false);
    const[studentUserName, setStudentUserName] = useState("");

    function invertLog(){
        setstudentlogIn((prev) => {
            return !prev;
        });
    }

    function getStudentUserName(name){
        setStudentUserName(name);
    }

    return(
        <div>
           {!studentlogIn ? (<Home22 invertLog={invertLog} getStudentUserName={getStudentUserName}/>) : (<WelStu studentUserName={studentUserName}/>)}
        </div>
    );
}


export default Login22;