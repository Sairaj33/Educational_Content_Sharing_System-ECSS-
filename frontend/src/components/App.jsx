import React, {useState} from "react";
 import Admin from "./Admin";
 import Home from "./Home";
 
 import Home11 from "./Home11";
 import Home22 from "./Home22";
//import A_Wh_C_AS  from "./A_Wh_C_AS";
//import A_Wh_C_AT  from "./A_Wh_C_AT";
 //import Allocate_thr_list  from "./Allocate_thr_list";
 //import Allocate_thr_list  from "./Allocate1_thr_list";
//import Allocate_sub_list  from "./Allocate_sub_list";
 //import Teacher_login  from "./Teacher_login";
 //import Tea_s_cl from "./Tea_s_cl";
 //import Student_logined from "./Student_logined";
 //import Stu_s_cl from "./Stu_s_cl";
 //import AddSubject from "./AddSubject";
 //import AddTeacher from "./AddTeacher";
 import WelAd from "./WelAd";
 import WelTs from "./WelTs";
 import WelStu from "./WelStu";

function App() {
    const[loggedIn, setLoggedIn] = useState(false);

    function invertLog(){
        setLoggedIn((prev) => {
            return !prev;
        });
    }

   
    return(
        <div>
            {!loggedIn ? (<Home invertLog={invertLog}/>) : (<WelAd/>)}
             
        </div>
        
           
         
         //<Home11/>
         //<WelAd/>
         //<WelTs/>
         //<WelStu/>
         //<Home22 />
         //<Admin />
        //<A_Wh_C_AS />
        //<Tea_s_cl/>
        //<Student_logined/>
        //<Allocate_thr_list />
        //<Allocate_sub_list />
        //<Teacher_login />
        
        //<Stu_s_cl/>
        //<A_Wh_C_AT />
        //<AddSubject />
        //<AddTeacher/>
    );
}


export default App;
