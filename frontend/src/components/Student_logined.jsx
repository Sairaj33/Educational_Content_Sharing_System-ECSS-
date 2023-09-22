import React from "react";
import {Link} from "react-router-dom";
//10
const tdStyle = {
    height: "200px",
    width: "200px",
}



function Student_logined(props) {

    console.log("smth:" + props.studentName);

    return(
        
        
        <div className="container-fluid" style={{overflow:'hidden'}}>
        <h1>Sairam Student</h1>      
                <table style={{width: "100%" , marginLeft: "50px"}}>          
                 <tr>
                        <td className="left_bigbox" style={{width: "700px",height: "500px" }} >
                        <Link to={"/SSubAllocated"} state={{name: props.studentName}}><button style={{height:"80px",width:"200px", borderRadius:"20px",backgroundColor:"#004aad",color:"white", marginLeft:"250px"}}>Project/Subject List</button> </Link>
                             
                            <div>
                                
                            </div>

                        </td>
                            
                        <tr className="right_upbox" >
                            <td style={tdStyle} >
                            <img style={{width: "200px",height: "210px", borderRadius:"25px"}} src="images/swami.png"/>
                            </td>
                        </tr>
                        <tr className="right_downbox">
                            <td style={tdStyle} > 
                            <Link to="/Login22"><button style={{backgroundColor:"white", border:"none",marginLeft:"70px"}}><img style={{width: "50px",height: "60px", backgroundColor:"white",}} src="images/logout.png"/></button> </Link>
                            </td>
                        </tr>
                    </tr>
                </table>
            </div>
    );
}
export default Student_logined;