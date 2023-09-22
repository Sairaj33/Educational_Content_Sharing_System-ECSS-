import React from "react";
import { useLocation } from "react-router-dom";
import Tea_s_cl from "../components/Tea_s_cl";

function TeacherSubject(){
    console.log(useLocation().state.name);
    let name = useLocation().state.name;
    return(
        <div>
            <Tea_s_cl teacherName={name}/>
        </div>
    );
}


export default TeacherSubject;    