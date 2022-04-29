import Container from "./components/Container";
import styled from "styled-components";
import Title from "./components/Title";

function About() {
  return (
    <>
      <Container>
        <Title>About me</Title>
        <AboutContainer>
          <Image src={process.env.PUBLIC_URL + "/images/sss.png"} alt="" />
          <Details>
            <div className="title">Erl Jerrald Jocson</div>
            <div className="short-summary">
              Learned to code during a class in programming during my first year
              in college. Since then i have been nurturing my skills by taking
              programming courses and taking on projects
            </div>
          </Details>
        </AboutContainer>
        <Contact>
          <h3>CONTACT INFORMATION</h3>
          <a>jocsonerl@gmail.com</a>
          <a>0939-784-5820</a>
          <a
            href="https://github.com/ErlJocson"
            target={"_black"}
            rel="nofollow"
          >
            https://github.com/ErlJocson
          </a>
        </Contact>
      </Container>
      <Container>
        <Title>Related Skills</Title>
        <SkillsContainer>
          <p>Python</p>
          <p>Flask</p>
          <p>Django</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Ubuntu</p>
          <p>Windows</p>
          <p>VS Code</p>
          <p>Postman</p>
          <p>Git</p>
          <p>GitHub</p>
          <p>Problem Solving</p>
          <p>Teamwork</p>
          <p>Analytical Thinking</p>
        </SkillsContainer>
      </Container>
    </>
  );
}

export default About;

const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Details = styled.div`
  div {
    text-align: center;
    padding: 10px;
    cursor: pointer;
    border-radius: 20px;
    margin: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    background-color: white;
    border: 1px solid rgb(213, 213, 213);
    width: 600px;
    transition: 300ms all ease;
  }

  .title {
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  .short-summary {
    line-height: 25px;
  }

  div:hover {
    box-shadow: 0 2px 6px rgb(118, 118, 118);
  }

  @media screen and (max-width: 1100px) {
    div {
      width: 400px;
      margin: 10px;
    }
  }

  @media screen and (max-width: 900px) {
    .title {
      font-size: 20px;
    }
    .short-summary {
      font-size: 14px;
    }

    div {
      width: 80%;
      margin: 10px auto;
    }
  }

  @media screen and (max-width: 720px) {
    .title {
      font-size: 16px;
    }
    .short-summary {
      line-height: 10px;
      font-size: 10px;
    }
  }
`;

const Image = styled.img`
  height: 300px;
  width: 350px;
  margin: 20px;
  border-radius: 20px;

  @media screen and (max-width: 900px) {
    width: 250px;
    height: 200px;
    margin: 15px;
  }

  @media screen and (max-width: 720px) {
    width: 200px;
    height: 150px;
    margin: 5px;
  }
`;

const Contact = styled.div`
  text-align: center;
  border: 1px solid rgb(213, 213, 213);
  padding: 10px;
  margin: 0 auto;
  width: 80%;
  border-radius: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 300ms all ease;
  background-color: white;
  &:hover {
    box-shadow: 0 2px 6px rgb(118, 118, 118);
  }

  h3 {
    margin: 10px 0;
  }

  a {
    text-transform: none;
    border-radius: 10px;
    padding: 5px 10px;
  }

  a:hover {
    background-color: #d6d6d6;
  }

  @media screen and (max-width: 1100px) {
    & {
      font-size: 14px;
    }

    h3 {
      margin: 5px 0;
    }
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;

    & {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 720px) {
    & {
      font-size: 10px;
    }
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
  width: 80%;
  p {
    padding: 10px 20px;
    margin: 10px;
    font-size: 25px;
    text-transform: uppercase;
    border-radius: 20px;
    background-color: white;
    border: 1px solid rgb(213, 213, 213);
    transition: 300ms all ease;
    cursor: pointer;
    font-style: italic;
  }

  p:hover {
    box-shadow: 0 2px 6px rgb(118, 118, 118);
  }

  @media screen and (max-width: 1100px) {
    p {
      font-size: 20px;
      margin: 5px;
    }
  }

  @media screen and (max-width: 900px) {
    p {
      font-size: 15px;
      padding: 10px;
    }
  }
`;
