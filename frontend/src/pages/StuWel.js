import React from "react";
import { useLocation } from "react-router-dom";
import Student_logined from "../components/Student_logined";

function StuWel(){
    console.log(useLocation().state.name);
    let name = useLocation().state.name;
    return(
        <div>
            <Student_logined studentName={name}/>
        </div>
    );
}


export default StuWel;