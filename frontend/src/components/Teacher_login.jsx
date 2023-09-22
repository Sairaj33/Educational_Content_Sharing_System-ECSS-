import React from "react";
import {Link} from "react-router-dom";
//04
const tdStyle = {
    height: "200px",
    width: "200px",
}


function Teacher_login(props) {

    return(
        
        
        <div className="container-fluid" style={{overflow:'hidden'}}>
        <h1>Sairam Teacher</h1>      
                <table style={{width: "100%" , marginLeft: "50px"}}>          
                            
                 <tr>
                        <td className="left_bigbox" style={{width: "700px",height: "500px" }} >
                            <Link to={"/TeacherSubject"} state={{name: props.teacherName}}><button style={{height:"80px",width:"200px", borderRadius:"20px",backgroundColor:"#004aad",color:"white", marginLeft:"250px"}}>Projects/Subjects</button></Link>

                        </td>
                            
                        <tr className="right_upbox" >
                            <td style={tdStyle} >
                            <img style={{width: "200px",height: "210px", borderRadius:"25px"}} src="images/swami.png"/>
                            </td>
                        </tr>
                        <tr className="right_downbox">
                            <td style={tdStyle} > 
                            <Link to="/Login11"> <button style={{backgroundColor:"white", border:"none",marginLeft:"70px"}}><img style={{width: "50px",height: "60px", backgroundColor:"white",}} src="images/logout.png"/></button> </Link>
                            </td>
                        </tr>
                    </tr>
                </table>
            </div>
    );
}
export default Teacher_login;