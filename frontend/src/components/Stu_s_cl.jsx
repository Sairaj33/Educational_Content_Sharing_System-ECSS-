import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//11
const tdStyle = {
  height: "200px",
  width: "200px",
};

function Stu_s_cl(props) {
  const [subjectArr, setSubjects] = useState([]);
  // const [linkArr, setLinks] = useState([]);
  const [ready, setReady] = useState(false);
  // const overallArr = {
  //   subjects: [subjectArr],
  //   links: [linkArr]
  // }
  useEffect(() => {
    if (ready === false) {
      fetchSubjects();
      setReady(true);
    }

    function fetchSubjects(event) {
      console.log("Inside handle Submit");
      const reqData = {
        // creates an object containing the form data to be sent to the server
        name: props.studentName,
      };
      fetch("http://192.168.34.141:8000" + "/getStudentSubjects", {
        // sends a POST request to the server with the form data
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(reqData),
      })
        .then((response) => response.json()) // gets the response from the server and converts it to JSON format
        .then((recvData) => {
          // setLinks(recvData.links);
          setSubjects(recvData.subjects);
          console.log("ok");
          console.log(recvData.subjects);
        })
        .catch((err) => {
          // handles any errors that occur during the fetch request
          console.log(err); // show  err msg
        });
    }

    console.log("nice:" + subjectArr);
  });

  console.log(props.studentName);
  return (
    <div className="container-fluid" style={{ overflow: "hidden" }}>
      <h1> Sairam Student</h1>
      <table style={{ width: "100%", marginLeft: "50px" }}>
        <tr>
          <td
            className="left_bigbox"
            style={{ width: "700px", height: "500px" }}
          >
            <h1
              style={{
                color: "black",
                height: "50px",
                width: "500px",
                marginLeft: "100px",
              }}
            >
              {" "}
              Project/Subject List{" "}
            </h1>

            <div className="box_inside_left_box">
              <div style={{ position: "relative", top: "10px" }}>
                {subjectArr.map((subject) => {
                  return (
                    <div>
                      <button style={{marginTop:"5px"}} className="rows"><a href={subject.link}>{subject.subject}</a></button>
                    </div>
                  );
                })}

              </div>
            </div>
          </td>

          <tr className="right_upbox">
            <td style={tdStyle}>
              <img
                style={{
                  width: "200px",
                  height: "210px",
                  borderRadius: "25px",
                }}
                src="images/swami.png"
              />
            </td>
          </tr>
          <tr className="right_downbox">
            <td style={tdStyle}>
              <Link to="/Login22">
                {" "}
                <button
                  style={{
                    backgroundColor: "white",
                    border: "none",
                    marginLeft: "70px",
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                      height: "60px",
                      backgroundColor: "white",
                    }}
                    src="images/logout.png"
                  />
                </button>{" "}
              </Link>
            </td>
          </tr>
        </tr>
      </table>
    </div>
  );
}
export default Stu_s_cl;
