import React from "react";
import {Link} from "react-router-dom";
// 02
const tdStyle = {
    height: "200px",
    width: "200px",
}

function btnfxn(e){
    // e.preventDefault();
    console.log('You clicked submit.');
}


function A_Wh_C_AT() {
    return(
        
        
        <div className="container-fluid" style={{overflow:'hidden'}}>
        <h1>Sairam Admin</h1>      
                <table style={{width: "100%" , marginLeft: "50px"}}>          
                 <tr>
                        <td className="left_bigbox" style={{width: "700px",height: "500px" }} >
                            <h1 style={{ color:"black", height:"50px",width:"500px",marginLeft: "100px",}}>Allocate Subjects or Projects </h1> 
                           
                            <div className="admin_div">
                            <Link to="/T_list"><button className="admin_btn" style={{marginBottom:"5px"}}>1st BSc</button></Link>
                            <Link to="/Tea_list1"> <button className="admin_btn" style={{marginBottom:"5px"}}>2nd BSc</button></Link>
                              <button className="admin_btn">3rd BSc</button>
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
export default A_Wh_C_AT;