import React , { useState } from "react";
import {Link} from "react-router-dom";

const tdStyle = {
    height: "200px",
    width: "200px",
}
function handleClick() {
    alert("Teacher is added");
  }


function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reqData = {      
        userName: data.get("name"),
        password: data.get("pwd"),
    };
    fetch("http://192.168.34.141:8000" + "/addTeacher", { // sends a POST request to the server with the form data
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    mode: "cors",
    body: JSON.stringify(reqData)
})
}

function AddTeacher() {
    return(
        
        <div className="container-fluid" style={{overflow:'hidden'}}>
        <h1>Sairam Admin</h1>      
                <table style={{width: "100%" , marginLeft: "50px"}}>          
                 <tr>
                        <td className="left_bigbox" style={{width: "700px",height: "500px" }} >
                             <h1 style={{ color:"black", height:"50px",width:"500px",marginLeft: "90px"}}>Add Teacher </h1> 
                            <div>
                                <form onSubmit={handleSubmit}  method="POST">

                                <input required className="addsub" type="text"  placeholder=" Enter User Name" name="name"/><br />
                                <input required  className="addsub" type="text"  placeholder=" Enter Password" name="pwd" /><br />
                                <button onClick={handleClick} style={{width: "70px",height: "35px", borderRadius:"20px",marginLeft:"200px", color:"white",backgroundColor:"#004aad",border:'none',marginTop:"20px"}}>Add</button> 
                                <Link to="/Allocate_StuTea"><button style={{width: "70px",height: "35px", borderRadius:"20px",marginLeft:"120px", color:"white",backgroundColor:"#004aad",border:'none'}}>Back</button></Link>

                                </form>

                            </div>
                           
                        </td>
                            
                        <tr className="right_upbox" >
                            <td style={tdStyle} >
                            <img style={{width: "200px",height: "210px", borderRadius:"25px"}} src="images/swami.png"/>
                            </td>
                        </tr>
                        <tr className="right_downbox">
                            <td style={tdStyle} > 
                            <Link to="/Login"><button style={{backgroundColor:"white", border:"none",marginLeft:"70px"}}><img style={{width: "50px",height: "60px", backgroundColor:"white",}} src="images/logout.png"/></button> </Link>
                            </td>
                        </tr>
                    </tr>
                </table>
            </div>
    );
}

export default AddTeacher;