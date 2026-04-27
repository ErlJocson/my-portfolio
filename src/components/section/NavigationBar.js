import styled from "styled-components";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { MdContactEmergency } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

function NavigationBar() {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <NavBar>
        <LeftItems>
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
        </LeftItems>

        <BurgerButton onClick={() => setShowNav(!showNav)}>
          {!showNav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </BurgerButton>

        <RightItems showNav={showNav}>
          <MyLink to="/" onClick={() => setShowNav(!showNav)}>
            <FaHome size={30} />
            ABOUT ME
          </MyLink>
          <MyLink to="/projects" onClick={() => setShowNav(!showNav)}>
            <PiProjectorScreenChartFill size={30} />
            PROJECTS
          </MyLink>
          <MyLink to="/contact-me" onClick={() => setShowNav(!showNav)}>
            <MdContactEmergency size={30} />
            CONTACT
          </MyLink>
        </RightItems>
      </NavBar>
    </>
  );
}

export default NavigationBar;

const MyLink = styled(Link)`
  color: white;
  padding: 10px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  * {
    margin: 0 5px;
  }

  &:hover {
    background-color: rgba(42, 40, 40, 0.8);
    border-radius: 10px;
  }
`;

const NavBar = styled.div`
  z-index: 100;
  overflow: hidden;
  height: 60px;
  background-color: rgb(2, 1, 16);
  border-bottom: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 1000px) {
    overflow: visible;
  }
`;

const NavigationItems = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftItems = styled(NavigationItems)`
  margin: 0 30px;
  img {
    width: 30px;
    margin: 0 10px;
  }
`;

const RightItems = styled(NavigationItems)`
  display: flex;
  margin: 0 30px;

  @media screen and (max-width: 1000px) {
    background-color: rgb(2, 1, 16);
    margin: 0;
    z-index: 100;
    height: 100vh;
    display: ${(props) => (props.showNav ? "none" : "flex")};
    flex-direction: column;
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const BurgerButton = styled.div`
  z-index: 101;
  display: none;
  margin-right: 30px;
  color: white;
  cursor: pointer;
  @media screen and (max-width: 1000px) {
    display: block;
  }
`;
