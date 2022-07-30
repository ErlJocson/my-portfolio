import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <h1>ERL JERRALD JOCSON</h1>
      <ul>
        <li>
          <i class="fa-regular fa-envelope"></i> jocsonerl@gmail.com
        </li>
        <li>
          <i class="fa-solid fa-phone"></i> 0939-784-5820
        </li>
        <li>
          <a
            href="https://github.com/ErlJocson"
            target={"_blank"}
            rel="noreferrer"
          >
            <i class="fa-brands fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <i class="fa-solid fa-location-dot"></i> Magdalena, Laguna
        </li>
      </ul>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  h1 {
    text-align: center;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f0b0b;
  box-shadow: var(--dark-shadow);
  color: white;
  min-height: 25vh;
  overflow: hidden;
  padding: 20px;
  ul {
    display: flex;
    li {
      list-style-type: none;
      margin: 30px;
      margin-bottom: 0px;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        color: white;
      }

      i {
        font-size: 25px;
        margin-right: 6px;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    & {
      ul {
        justify-content: center;
        align-items: center;
        li {
          margin: 20px;
          margin-bottom: 0px;
          font-size: 14px;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    & {
      h1 {
        font-size: 25px;
      }
      ul {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        li {
          margin: 20px;
          margin-bottom: 0px;
          i {
            font-size: 20px;
          }
        }
      }
    }
  }
`;
