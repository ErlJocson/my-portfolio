import React, { useState } from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <NavbarContainer show={showNavbar}>
      <div className="logo">jerds</div>

      <div className="burger-button" onClick={() => setShowNavbar(!showNavbar)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="nav-items">
        <Fade cascade>
          <a href="#header" onClick={() => setShowNavbar(!showNavbar)}>
            about
          </a>
        </Fade>
        <Fade cascade>
          <a href="#skills" onClick={() => setShowNavbar(!showNavbar)}>
            SKills
          </a>
        </Fade>
        <Fade cascade>
          <a href="#education" onClick={() => setShowNavbar(!showNavbar)}>
            Education
          </a>
        </Fade>
        <Fade cascade>
          <a href="#projects" onClick={() => setShowNavbar(!showNavbar)}>
            Projects
          </a>
        </Fade>
      </div>
    </NavbarContainer>
  );
}
export default Navbar;

const NavbarContainer = styled.nav`
  height: 60px;
  z-index: 10;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-around;
  font-family: "Times New Roman", Times, serif;
  background-color: rgba(0, 0, 0, 0.6);

  .logo {
    z-index: 21;
  }

  .burger-button {
    display: none;
    cursor: pointer;
    div {
      margin: 3px 0;
      height: 3px;
      width: 20px;
      border-radius: 10px;
      background-color: white;
    }
  }

  div {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    color: white;
  }

  .nav-items {
    a {
      text-decoration: none;
      color: white;
      margin: 0 10px;
    }

    a:hover {
      color: gray;
    }
  }

  @media screen and (max-width: 900px) {
    .burger-button {
      display: inline;
      z-index: 21;
    }

    .nav-items {
      display: ${(props) => (props.show ? "flex" : "none")};
      background-color: black;
      flex-direction: column;
      padding-top: 60px;
      top: 0;
      left: 0;
      right: 0;
      position: absolute;

      a {
        margin: 10px 0 10px 20px;
      }
    }
  }
`;
