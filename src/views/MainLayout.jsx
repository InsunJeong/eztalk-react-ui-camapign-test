/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// import ReactDOM from "react-dom/client";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import {useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/paper-dashboard.css";
import "../assets/css/eztalk-custom.css";
import "../assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import PerfectScrollbar from "perfect-scrollbar";
import { useState } from 'react';

import DemoNavbar from "../components/HeaderNavbar";
import Sidebar from "../components/Sidebar";
import useAuth from '../hooks/useAuth';

import Home from "./Home";
import Login from "./Login";
import routes from "./routes.jsx";


var ps;

function MainLayout(props) {
  const [token, setToken] = React.useState("");
  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [activeColor, setActiveColor] = React.useState("danger");
  
  const mainPanel = React.useRef();
  const location = useLocation();

  // useAuth를 통해 로그인되었는지를 체크한다. 
  let { isAuth, logout } = useAuth();
  console.log("Current User has auth :: " + isAuth); 
  
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };

  });
  
  
  React.useEffect(() => {
    mainPanel.current.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [location]);

  const handleActiveClick = (color) => {
    setActiveColor(color);
  };
  const handleBgClick = (color) => {
    setBackgroundColor(color);
  };

  function hasAuth() {
    // if (!auth) 
    // {
    //   let { auth, logout } = useAuth();
    // }
      
    // setAuth(isAuth);
    // setLogout(logout);

    return isAuth;
  };

  return (
    <div className="wrapper">
      <Sidebar
        location={location}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
      />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar 
            location={location}
            ctiveColor={activeColor}
            isAuth={isAuth} 
            handleActiveClick={logout} />
        <Routes>
          <Route path="/" index element={<Home />} key="home" /> 
          <Route path="/menu/register" element={<Login />}  /> 
          <Route path="/menu/login" element={<Login />}  /> 
          {routes.map((prop, key) => {
            // console.log("token : " + token + prop.path+":" + prop.needAuth)
            return (
              
              <Route
                path={prop.layout + prop.path}
                element={ 
                  (!prop.needAuth || isAuth) ?
                    <prop.component /> :
                    <Login location={location}/>
                  }
                key={key}
              />
            ) ;
          })}
        </Routes>
      </div> 
       {/* <Footer fluid />  */}
    </div>
  );
}

export default MainLayout;

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Layout />
//     </BrowserRouter>
//   </React.StrictMode>
// )
