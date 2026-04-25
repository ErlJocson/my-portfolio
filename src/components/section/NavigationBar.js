import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import { MdContactEmergency } from "react-icons/md";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <NavBar>
        <LeftItems>
          <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" />
        </LeftItems>
        <RightItems>
          <MyLink to="/">
            <FaHome size={30} />
            ABOUT ME
          </MyLink>

          <MyLink to="/projects">
            <PiProjectorScreenChartFill size={30} />
            PROJECTS
          </MyLink>

          <MyLink to="/contact-me">
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
  overflow: hidden;
  height: 60px;
  background-color: rgb(2, 1, 16);
  border-bottom: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavigationItems = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 30px;
`;

const LeftItems = styled(NavigationItems)`
  img {
    width: 30px;
    margin: 0 10px;
  }
`;

const RightItems = styled(NavigationItems)`
  display: flex;
`;
