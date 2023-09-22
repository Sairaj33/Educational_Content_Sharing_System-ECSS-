import React from "react";
import {Link} from "react-router-dom";

function Home22(props) {
    function handleSubmit(event){
        console.log("Inside handle Submit");
        event.preventDefault();  // prevents the form from submitting normally
        const data = new FormData(event.currentTarget);// creates a new FormData object from the form data
        const reqData = {      // creates an object containing the form data to be sent to the server
            username: data.get("username"),// gets the value of the "username" input field
            password: data.get("password")// gets the value of the "password" input field
        };
        fetch("http://192.168.34.141:8000" + "/studentLogin", { // sends a POST request to the server with the form data
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            mode: "cors",
            body: JSON.stringify(reqData)
        })
        .then((response) => response.json()) // gets the response from the server and converts it to JSON format
        .then((recvData) => {               // handles the JSON response from the server
            if(recvData.success === "success"){
                props.invertLog();
                props.getStudentUserName(recvData.data);
            } 
            else if(recvData.success === "failure")
                console.log("Failed to log in");
            else if(recvData.success === "InvalidPassword")
                console.log("Invalid Password");
        })
        .catch((err) => {                  // handles any errors that occur during the fetch request
            console.log(err);                 // show  err msg
        });

    }
    return(
        <>
        <h1>STUDENT</h1>

        <div className="bigHead" style={{marginTop:"50px"}}>
        

            <div className="loginTab">
            <h1 className="heading" style={{marginTop:"5px"}}>SSSIHL MDH</h1>
            <img className="img1" src="images/sssihl.png"/>
                
                <form method="POST" onSubmit={handleSubmit}>
                    <button type="submit" className="homeLogin">Login</button><br />
                    <input className="user" type="text" name="username" placeholder="Userame" /><br />
                    <input className="Password" type="password" name="password" placeholder="Password"/><br />
                    <br /><br />
                </form>
                <div className="row">
                    <Link to="/Login"><button className="teacherStu" style={{padding:"5px",height:"30px", width:"80px"}}  > ADMIN </button></Link>
                    <Link to="/Login11"><button className="teacherStu" style={{padding:"5px",marginLeft:"5px",height:"30px", width:"80px"}} > TEACHER </button></Link>
                    
                </div> <br />
            </div>
        </div>
        </>
        );
        }

//         <>
//         <h1>STUDENTS</h1>
//         <Link to="/Login"><button style={{marginLeft:"600px",padding:"5px", height:"30px", width:"80px"}} > ADMIN </button></Link>
//         <Link to="/Login11"><button style={{padding:"5px",marginLeft:"5px",height:"30px", width:"80px"}}> TEACHER </button></Link>
//         <div className="bigHead" style={{marginTop:"50px"}}>
//             <h1 className="heading" style={{marginTop:"5px"}} >SSSIHL MDH</h1>

//             <div className="loginTab">
//             <img className="img1" src="images/sssihl.png"/>
                
//                 <form method="POST" onSubmit={handleSubmit}>
//                     <button style={{marginBottom:"5px",marginTop:"20px",borderRadius:"20px",backgroundColor:"#004aad",padding:"15px 50px",color:"white",border:"none"}}>Login</button><br />
//                     <input className="user" type="text" name="username" placeholder="Userame" /><br />
//                     <input className="Password" type="password" name="password" placeholder="Password"/><br />
                    
//                 </form>
//             </div>
//         </div>
//         </>
//     );
// }

export default Home22;