import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

function Navbar() {
  return (
    <NavbarContainer>
      <div className="logo">jerds</div>
      <div className="nav-items">
        <Fade cascade>
          <a href="#header">about</a>
        </Fade>
        <Fade cascade>
          <a href="#skills">SKills</a>
        </Fade>
        <Fade cascade>
          <a href="#education">Education</a>
        </Fade>
        <Fade cascade>
          <a href="#projects">Projects</a>
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
`;
