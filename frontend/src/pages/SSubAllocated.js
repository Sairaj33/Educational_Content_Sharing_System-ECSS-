import React from "react";
import { useLocation } from "react-router-dom";
import Stu_s_cl from "../components/Stu_s_cl";

function SSubAllocated(){
    console.log(useLocation().state.name);
    let name = useLocation().state.name;

    return(
        <div>
            <Stu_s_cl studentName={name}/>
        </div>
    );
}


export default SSubAllocated;