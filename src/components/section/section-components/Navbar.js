import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <NavbarContainer>
      <div className="logo">jerds</div>
      <div className="nav-items">
        <a href="#header">about</a>
        <a href="#skills">SKills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
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
    letter-spacing: 1.5px;
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
