import React , { useState } from "react";
import {Link} from "react-router-dom";


const tdStyle = {
    height: "200px",
    width: "200px",
}

function clickfunction() {
    alert("Student is added");
  }


function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reqData = {      
        userName: data.get("name"),
        password: data.get("pwd"),
        course: data.get("course")
    };
    fetch("http://192.168.34.141:8000" + "/addStudent", { // sends a POST request to the server with the form data
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    mode: "cors",
    body: JSON.stringify(reqData)
})
// .then((response) => response.json()) // gets the response from the server and converts it to JSON format
// .then((recvData) => {               // handles the JSON response from the server
//     //console.log(recvData.success);
// })
// .catch((err) => {                  // handles any errors that occur during the fetch request
//     console.log(err);                 // show  err msg
// });
}

function AddStudent() {
    return(
        
        
        <div className="container-fluid" style={{overflow:'hidden'}}>
        <h1>Sairam Admin</h1>      
                <table style={{width: "100%" , marginLeft: "50px"}}>          
                 <tr>
                        <td rowSpan={2} className="left_bigbox" style={{width: "700px",height: "500px" }} >
                             <h1 style={{ color:"black", height:"50px",width:"500px",marginLeft: "90px"}}>Add Student </h1> 
                            <div>

                                <form onSubmit={handleSubmit}  method="POST">

                                <input required className="addsub" type="text"  placeholder=" Enter User Name" name="name"/><br />
                                <input required className="addsub" type="password"  placeholder=" Enter Password" name="pwd"/><br />
                                <input required className="addsub" type="text"  placeholder=" Enter Course" name="course"/><br />
                                <button onClick={clickfunction} style={{width: "70px",height: "35px", borderRadius:"20px",marginLeft:"200px", color:"white",backgroundColor:"#004aad",border:'none',marginTop:"20px"}}>Add</button> 
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
export default AddStudent;


