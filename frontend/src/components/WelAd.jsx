import React,  {useEffect } from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
 
const tdStyle = {
    height: "200px",
    width: "200px",
}


function WelAd() {
    const location = useLocation();
    const navigate = useNavigate();
    return(
        
        
        <div className="container-fluid" style={{overflow:'hidden'}}>
        <h1>Sairam Admin  </h1>      
                <table style={{width: "100%" , marginLeft: "50px"}}>          
                            
                 <tr>
                        <td className="left_bigbox" style={{width: "700px",height: "500px" }} >
                            <Link to="/AdWel"><button style={{height:"80px",width:"200px", borderRadius:"20px",backgroundColor:"#004aad",color:"white", marginLeft:"250px"}}>Continue</button></Link>

                        </td>
                            
                        <tr className="right_upbox" >
                            <td style={tdStyle} >
                            <img style={{width: "200px",height: "210px", borderRadius:"25px"}} src="images/blessing.png"/>
                            </td>
                        </tr>
                        <tr className="right_downbox">
                            <td style={tdStyle} > 
                            <Link to="/Login"> <button style={{backgroundColor:"white", border:"none",marginLeft:"70px"}}><img style={{width: "50px",height: "60px", backgroundColor:"white",}} src="images/logout.png"/></button> </Link>
                            </td>
                        </tr>
                    </tr>
                </table>
            </div>
    );
}
export default WelAd;