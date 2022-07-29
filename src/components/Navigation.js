import styled from "styled-components";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <MyNavigation>
      <MyLink to="/my-portfolio">
        <i class="fa-solid fa-person-digging"></i> Skills
      </MyLink>
      <MyLink to="/education">
        <i class="fa-solid fa-graduation-cap"></i> Education
      </MyLink>
      <MyLink to="/project">
        <i class="fa-solid fa-file-code"></i> Project
      </MyLink>
    </MyNavigation>
  );
}

export default Navigation;

const MyLink = styled(Link)`
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
  color: black;
  text-decoration: none;
  &:hover {
    color: #424242;
  }
`;

const MyNavigation = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-around;
`;
