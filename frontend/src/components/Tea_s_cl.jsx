import {React, useEffect, useState} from "react";
import {Link} from "react-router-dom";
//09
const tdStyle = {
    height: "200px",
    width: "200px",
}


function Tea_s_cl(props) {
    const[subjectArr, setSubjects] = useState([]);
    const [ready, setReady] = useState(false);
    useEffect(() =>{
        if(ready === false){
            fetchSubjects();
            setReady(true);
        }
        
    console.log("nice:" + subjectArr);  
    })
    function fetchSubjects(event){
        console.log("Inside handle Submit");
            const reqData = {      // creates an object containing the form data to be sent to the server
                name: props.teacherName
            };
            fetch("http://192.168.34.141:8000" + "/getSubjects", { // sends a POST request to the server with the form data
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                mode: "cors",
                body: JSON.stringify(reqData)
            })
            .then((response) => response.json()) // gets the response from the server and converts it to JSON format
            .then((recvData) => { 
                setSubjects(recvData.subjects);   
                console.log(recvData.subjects);
            })
            .catch((err) => {                  // handles any errors that occur during the fetch request
                console.log(err);                 // show  err msg
            });
    }
    return(
        
        <div className="container-fluid" style={{overflow:'hidden'}} >
        <h1>Sairam Teacher</h1>      
                <table style={{width: "100%" , marginLeft: "50px"}}>          
                 <tr>
                        <td className="left_bigbox" style={{width: "700px",height: "500px" }} >
                             <h1 style={{ color:"black", height:"50px",width:"500px",marginLeft: "100px",}}> Projects/Subjects </h1>  

                            <div className="box_inside_left_box">
                                <div style={{position:'relative', top:'10px'}}>
                                {subjectArr.map((subject) => {
                                    return( <button style={{marginTop:"5px"}} className="rows"><a href={subject.link}>{subject.subject}</a></button>);
                                    
                                })}

                                </div>
                            </div>
                            
                        </td>
                            
                        <tr className="right_upbox" >
                            <td style={tdStyle} >
                            <img style={{width: "200px",height: "210px", borderRadius:"25px"}} src="images/swami.png"/>
                            </td>
                        </tr>
                        <tr className="right_downbox">
                            <td style={tdStyle} > 
                            <Link to="/Login11">  <button style={{backgroundColor:"white", border:"none",marginLeft:"70px"}}><img style={{width: "50px",height: "60px", backgroundColor:"white",}} src="images/logout.png"/></button> </Link>
                            </td>
                        </tr>
                    </tr>
                </table>
            </div>
    );
}
export default Tea_s_cl;