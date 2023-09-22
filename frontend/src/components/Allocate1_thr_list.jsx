import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

//07
const tdStyle = {
    height: "200px",
    width: "200px",
}


function Allocate1_thr_list() {

    useEffect(() =>{
        if(ready === false){
            fetch2BScTeachers();
            setReady(true);
        }  
    })
    const [ready, setReady] = useState(false);
    const [teach2BScArr, setTeach2BScArr] = useState([]);
    const [array2BSc, setArray2BSc] = useState([]);

    function handleSubmit(event){
        console.log("Inside handle Submit");
        event.preventDefault();  // prevents the form from submitting normally
        const data = new FormData(event.currentTarget);// creates a new FormData object from the form data
        const reqData = {      // creates an object containing the form data to be sent to the server
            course: "2nd BSc",
            teacher2BSc: data.get("teacher"),// gets the value of the "username" input field
            subject2BSc: data.get("subject")// gets the value of the "password" input field
        };
        fetch("http://192.168.34.141:8000" + "/update2BScClass", { // sends a POST request to the server with the form data
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            mode: "cors",
            body: JSON.stringify(reqData)
        })
        .then((response) => response.json()) // gets the response from the server and converts it to JSON format
        .then((recvData) => {               // handles the JSON response from the server
            //console.log(recvData.success);
            setArray2BSc(recvData.success);
            console.log(array2BSc);
        })
        .catch((err) => {                  // handles any errors that occur during the fetch request
            console.log(err);                 // show  err msg
        });


    }

    function fetch2BScTeachers(){
        console.log("Inside handle Submit");
        fetch("http://192.168.34.141:8000" + "/fetch2BScTeachers", { // sends a POST request to the server with the form data
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            mode: "cors",
        })
        .then((response) => response.json()) // gets the response from the server and converts it to JSON format
        .then((recvData) => {      
            setTeach2BScArr(recvData.teacher2BScArr);
        })
        .catch((err) => {                  // handles any errors that occur during the fetch request
            console.log(err);                 // show  err msg
        });


    }
    return(
        
        
        <div className="container-fluid" style={{overflow:'hidden'}}>
        <h1>sairam</h1>      
                <table style={{width: "100%" , marginLeft: "50px"}}>          
                 <tr>
                        <td className="left_bigbox" style={{width: "700px",height: "500px" }} >
                             <h1 style={{ color:"black", height:"50px",width:"500px",marginLeft: "100px",}}>Allocate Subjects or Projects </h1> 
                             

                            <div className="box_inside_left_box">
                                <div className="row" style={{position:'relative', top:'10px'}}>
                                    <form onSubmit={handleSubmit}>
                                        <input name="teacher" style={{marginBottom:"5px"}}className="addsub" type="text"  placeholder=" Enter Teacher Name" /><br />
                                        <input name="subject" className="addsub" type="text"  placeholder=" Enter Subject Name" />
                                        <button type="submit" style={{width: "60px",height: "25px", borderRadius:"20px",marginLeft:"130px",color:"Black",backgroundColor:"white",border:'none',marginTop:"5px"}}>Submit</button>
                                    </form>
                                </div>
                                <div className="row" style={{marginTop:"15px", borderRadius:"20px"}}>
                                    {array2BSc.length === 0 ? teach2BScArr.map((teacher) => {
                                        return (
                                            <div>
                                            <input style={{marginTop:"5px"}} className="rows" type="" value={teacher} /><br />
                                            </div>
                                        );
                                    }) : array2BSc.map((user) =>{
                                        return (
                                            <div>
                                            <input style={{marginTop:"5px"}} className="rows" type="" value={user} /><br />
                                            </div>
                                        );
                                    })}
                                
                                

                                {/* <input style={{marginTop:"5px"}} className="rows" type="" value="teacher name" /> */}
                               {/* </div> <Link to="/ThrAdd"><button style={{width: "70px",height: "35px", borderRadius:"20px",marginLeft:"400px", color:"white",backgroundColor:"#004aad",border:'none'}}>Add</button></Link> */}
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
                            <Link to="/Login"><button style={{backgroundColor:"white", border:"none",marginLeft:"70px"}}><img style={{width: "50px",height: "60px", backgroundColor:"white",}} src="images/logout.png"/></button> </Link>
                            </td>
                        </tr>
                    </tr>
                </table>
            </div>
    );
}
export default Allocate1_thr_list;