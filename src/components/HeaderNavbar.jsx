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
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  // InputGroupAddon,
  Input,
} from "reactstrap";

import routes from "../views/routes.jsx";


function ConfirmLogout(props) {
  const [classes, setClasses] = React.useState("dropdown show");
  const handleClick = () => {
    if (classes === "dropdown") {
      setClasses("dropdown show");
    } else {
      setClasses("dropdown");
    }
  };
  return (
    // <div className="fixed-plugin">
      <div className={classes}>
        <div onClick={handleClick}>
          <i className="fa fa-cog fa-2x" />
        </div>
        <ul className="dropdown-menu show">
          {/* <div>로그아웃하시겠습니까 ? </div> */}
          <li className="button-container">
            <Button
              onClick={props.logout}
              color="danger"
              block
              className="btn-round"
            >
              Logout
            </Button>
          </li>
          
        </ul>
      </div>
    // </div>
  );
};


function Header(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [userMenuDropdownOpen, setUserMenuDropdownOpen] = React.useState(false);
  const [powerMenuDropdownOpen, setPowerMenuDropdownOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const location = useLocation();
  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("dark");
    }
    setIsOpen(!isOpen);
  };
  const userMenuDropdownToggle = (e) => {
    setUserMenuDropdownOpen(!userMenuDropdownOpen);
  };
  const powerMenuDropdownToggle = (e) => {
    setPowerMenuDropdownOpen(!powerMenuDropdownOpen);
  };
  const getBrand = () => {
    let brandName = "Welcome to EZ-Talk";
    routes.map((item, key) => {

      // 권한이 없는 경우 로그인 화면으로 이동되므로 null을 리턴
      if (!props.isAuth) return null;
      if (window.location.href.indexOf(item.layout + item.path) !== -1) {
        brandName = item.name;
      }
      return null;
    });
    return brandName;
  };
  const openSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    sidebarToggle.current.classList.toggle("toggled");
  };
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("dark");
    } else {
      setColor("transparent");
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateColor.bind(this));
  });
  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);

  
  
  return (
    // add or remove classes depending if we are on full-screen-maps page or not
    <Navbar
      color={
        props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "dark"
          : color
      }
      expand="lg"
      className={
        props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "navbar-absolute fixed-top"
          : "navbar-absolute fixed-top " +
            (color === "transparent" ? "navbar-transparent " : "")
      }
    >
      {/* <Container fluid> */}
        <div className="navbar-wrapper"
             data-active-color={props.activeColor}
        >
          <div className="navbar-toggle">
            <button
              type="button"
              ref={sidebarToggle}
              className="navbar-toggler"
              onClick={() => openSidebar()}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <NavbarBrand className="eztalk-main-title">{getBrand()}
          </NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          
          <Nav navbar>

            <Dropdown
              nav
              isOpen={userMenuDropdownOpen}
              toggle={(e) => userMenuDropdownToggle(e)}
            >
              <DropdownToggle caret nav>
                <i className="nc-icon nc-circle-10" />
                <p>
                  <span className="d-lg-none d-md-block">User Info</span>
                </p>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header className="eztalk-dropdown-header">Username</DropdownItem>
                <DropdownItem tag="a" >Profile</DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag="a" >My Account</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown
              nav
              isOpen={powerMenuDropdownOpen}
              toggle={(e) => powerMenuDropdownToggle(e)}
            >
              <DropdownToggle nav>
                <i className="nc-icon nc-button-power" />{" "}
                <p>
                  <span className="d-lg-none d-md-block">Logout</span>
                </p>
              </DropdownToggle>
              <DropdownMenu strategy="">
                <DropdownItem header className="eztalk-dropdown-header">Log-out</DropdownItem>
                <DropdownItem className="eztalk-dropdown-item"
                  onClick={() => {
                      props.handleActiveClick();
                    }}
                >OK</DropdownItem>
              </DropdownMenu>
            </Dropdown>

          </Nav>
        </Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default Header;
