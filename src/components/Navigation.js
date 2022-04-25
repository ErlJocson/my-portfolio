import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [showNav, setShowNav] = useState(false);
  return (
    <Nav show={showNav}>
      <LinkContainer>
        <BurgerButton onClick={() => setShowNav(!showNav)}>
          <div></div>
          <div></div>
          <div></div>
        </BurgerButton>
        {showNav ? (
          <>
            <MyLink onClick={() => setShowNav(!showNav)} to="/jerds">
              about
            </MyLink>
            <MyLink onClick={() => setShowNav(!showNav)} to="/education">
              education
            </MyLink>
            <MyLink onClick={() => setShowNav(!showNav)} to="/certification">
              certification
            </MyLink>
            <MyLink onClick={() => setShowNav(!showNav)} to="/project">
              project
            </MyLink>
          </>
        ) : (
          ""
        )}
      </LinkContainer>
    </Nav>
  );
}

export default Navigation;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: ${(props) => (props.show ? "200px" : "50px")};
  bottom: 0;
  background-color: white;
  box-shadow: 0 2px 6px rgb(118, 118, 118);
`;

const LinkContainer = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const MyLink = styled(Link)`
  padding: 10px;
  border-radius: 10px;
  margin: 6px;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: black;

  &:hover {
    box-shadow: 0 2px 6px rgb(118, 118, 118);
  }
`;

const BurgerButton = styled.div`
  margin: 4px;
  cursor: pointer;
  div {
    height: 2px;
    background-color: black;
    width: 20px;
    margin: 2px;
  }
`;
