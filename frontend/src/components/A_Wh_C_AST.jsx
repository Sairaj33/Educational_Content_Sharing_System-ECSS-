import React from "react";
import {Link} from "react-router-dom";
// 02
const tdStyle = {
    height: "200px",
    width: "200px",
}

function A_Wh_C_AST() {
    return( 
        <div className="container-fluid" style={{overflow:'hidden'}}>
        <h1>Sairam Admin</h1>      
                <table style={{width: "100%" , marginLeft: "50px"}}>          
                 <tr>
                        <td className="left_bigbox" style={{width: "700px",height: "500px" }} >
                             <h1 style={{ color:"black", height:"50px",width:"500px",marginLeft: "100px",}}>Add Student and Teacher</h1> 
                         
                            <div className="admin_div">
                                 <Link to="/StuAdd"><button className="admin_btn" >Add Student</button></Link>
                                 <Link to="/ThrAdd"> <button className="admin_btn" >Add Teacher</button></Link>
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
export default A_Wh_C_AST;