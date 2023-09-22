import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import Login from "./pages/Login";
import Login11 from "./pages/Login11";
import Login22 from "./pages/Login22";
import Allocate_StuTea from "./pages/Allocate_StuTea";
import Allocate_Teacher from "./pages/Allocate_Teacher";
import S_list from "./pages/S_list";
import T_list from "./pages/T_list";
import Tea_list1 from "./pages/Tea_list1";
import TeacherSubject from "./pages/TeacherSubject";
import SSubAllocated from "./pages/SSubAllocated";
import SubAdd from "./pages/SubAdd";
import StuAdd from "./pages/StuAdd";
import ThrAdd from "./pages/ThrAdd";
import AdWel from "./pages/AdWel";
import TsWel from "./pages/TsWel";
import StuWel from "./pages/StuWel";



import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Login11",
    element: <Login11 />,
  },
  {
    path: "Login22",
    element: <Login22 />,
  },
  {
    path: "Allocate_StuTea",
    element: <Allocate_StuTea/>,
  },
  {
    path: "Allocate_Teacher",
    element: <Allocate_Teacher/>,
  },
  {
    path: "S_list",
    element: <S_list/>,
  },
  {
    path: "T_list",
    element: <T_list/>,
  },
  {
    path: "Tea_list1",
    element: <Tea_list1/>,
  },
  {
    path: "TeacherSubject",
    element: <TeacherSubject/>,
  },
  {
    path: "SSubAllocated",
    element: <SSubAllocated/>,
  },
  {
    path: "SubAdd",
    element: <SubAdd/>,
  },
  {
    path: "StuAdd",
    element: <StuAdd/>,
  },
  {
    path: "ThrAdd",
    element: <ThrAdd/>,
  },
  {
    path: "AdWel",
    element: <AdWel/>,
  },
  {
    path: "TsWel",
    element: <TsWel/>,
  },
  {
    path: "StuWel",
    element: <StuWel/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
