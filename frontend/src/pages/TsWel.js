import React from "react";
import { useLocation } from "react-router-dom";
import Teacher_login from "../components/Teacher_login";

function TsWel(){
    console.log(useLocation().state.name);
    let name = useLocation().state.name;

    return(
        <div>
            <Teacher_login teacherName={name}/>
        </div>
    );
}


export default TsWel;