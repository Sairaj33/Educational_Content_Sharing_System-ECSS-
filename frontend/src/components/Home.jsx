import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  function handleSubmit(event) {
    console.log("Inside handle Submit");
    event.preventDefault(); // prevents the form from submitting normally
    const data = new FormData(event.currentTarget); // creates a new FormData object from the form data
    const reqData = {
      // creates an object containing the form data to be sent to the server
      username: data.get("username"), // gets the value of the "username" input field
      password: data.get("password"), // gets the value of the "password" input field
    };
    fetch("http://192.168.34.141:8000" + "/adminLogin", {
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
        // handles the JSON response from the server
        if (recvData.success === "success") {
          console.log("data received");
          props.invertLog();
        } else if (recvData.success === "failure")
          console.log("Failed to log in");
        else if (recvData.success === "InvalidPassword")
          console.log("Invalid Password");
      })
      .catch((err) => {
        // handles any errors that occur during the fetch request
        console.log(err); // show  err msg
      });
  }
  return (
    <>
      <h1>ADMIN</h1>

      <div className="bigHead" style={{ marginTop: "50px" }}>
        <div className="loginTab">
          <h1 className="heading" style={{ marginTop: "5px" }}>
            SSSIHL MDH
          </h1>
          <img className="img1" src="images/sssihl.png" />
          <form method="POST" onSubmit={handleSubmit}>
            <button type="submit" className="homeLogin">
              Login
            </button>
            <br />
            <input
              className="user"
              type="text"
              name="username"
              placeholder="Userame"
            />
            <br />
            <input
              className="Password"
              type="password"
              name="password"
              placeholder="Password"
            />
            <br />
            <br />
            <br />
          </form>
          <div className="row">
            <Link to="/Login11">
              <button
                className="teacherStu"
                style={{ padding: "5px", height: "30px", width: "80px" }}
              >
                {" "}
                TEACHER{" "}
              </button>
            </Link>
            <Link to="/Login22">
              <button
                className="teacherStu"
                style={{
                  padding: "5px",
                  marginLeft: "5px",
                  height: "30px",
                  width: "80px",
                }}
              >
                {" "}
                STUDENT{" "}
              </button>
            </Link>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default Home;
