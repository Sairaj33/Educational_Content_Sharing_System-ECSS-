import React, {useEffect} from "react";
import {Link , useLocation, useNavigate} from "react-router-dom";

const tdStyle = {
    height: "200px",
    width: "200px",
}



function Admin() {



    return(
            <div className="container-fluid" style={{overflow:'hidden'}}>
              <h1>Welcome Admin</h1>         
                <table style={{width: "100%" , marginLeft: "50px"}}>          
                 <tr>
                        <td className="left_bigbox" style={{width: "700px",height: "500px" }} >
                       
                            <div className="admin_div">
                                {/* <Link to=""><button className="admin_btn" >Add Student and Teacher</button></Link> */}
                                <Link to="/Allocate_StuTea"> <button className="admin_btn" >Add Student and Teacher</button></Link>
                                <Link to="/Allocate_Teacher"><button className="admin_btn" >Allocate Projects & Subjects</button></Link>
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

export default Admin;