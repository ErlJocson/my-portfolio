import styled from "styled-components";
import { IoMdAnalytics } from "react-icons/io";
import { FaFileCode, FaTools } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";


function Skills() {
  const programmingSkills = [
    "Python",
    "Jupyter",
    "Flask",
    "Django",
    "JavaScript",
    "React",
    "SQL",
    "HTML",
    "CSS",
    "DBeaver",
  ];
  const tools = [
    "Visual studio code",
    "Postman",
    "Windows",
    "Linux/Ubuntu",
    "pycharm",
    "GIT",
    "GitHub",
    "Power Automate",
  ];

  const dataAnalytics = [
    "Statistics",
    "Minitab",
    "Excel",
    "Power Point/Canva",
    "Jamovi",
    "Power BI",
    "Query Building",
  ];

  const softSkills = [
    "Management",
    "Data Visualization",
    "Data Analysis",
    "Problem-solving",
    "Analytical thinking",
    "Teamwork",
  ];

  return (
    <>
      <SkillsMainContainer className="border-bottom-blue" id="skills">
        <h1>My Stack of Tricks</h1>
        <hr />
        <MySkillContainer id="skills">
          <SkillsContainer>
            <div className="skill-header gray-hover">
              <IoMdAnalytics size={50} color="rgb(133, 76, 197)"/>
              <h3>Data Analytics</h3>
              <hr/>
            </div>
            <div className="skill-container">
              {dataAnalytics.map((skills, id) => {
                return <div key={id}>{skills}</div>;
              })}
            </div>
          </SkillsContainer>
          <SkillsContainer>
            <div className="skill-header gray-hover">
              <FaFileCode size={50} color="rgb(133, 76, 197)"/>
              <h3>Programming skills</h3>
              <hr/>
            </div>
            <div className="skill-container">
              {programmingSkills.map((skills, id) => {
                return <div key={id}>{skills}</div>;
              })}
            </div>
          </SkillsContainer>
          <SkillsContainer>
            <div className="skill-header gray-hover">
              <FaTools size={50} color="rgb(133, 76, 197)"/>
              <h3>Tools and technologies</h3>
              <hr/>
            </div>
            <div className="skill-container">
              {tools.map((skill, id) => {
                return <div key={id}>{skill}</div>;
              })}
            </div>
          </SkillsContainer>
          <SkillsContainer>
            <div className="skill-header gray-hover">
              <GiSkills size={50} color="rgb(133, 76, 197)"/>
              <h3>Soft skills</h3>
              <hr/>
            </div>
            <div className="skill-container">
              {softSkills.map((skill, id) => {
                return <div key={id}>{skill}</div>;
              })}
            </div>
          </SkillsContainer>
        </MySkillContainer>
      </SkillsMainContainer>
    </>
  );
}

export default Skills;

const SkillsMainContainer = styled.div`
  background-color: rgba(15, 11, 11, 0.3);
  display: flex;
  flex-direction: column;
  padding: 30px 0;

  h1 {
    color: white;
    text-transform: uppercase;
    text-align: center;;
  }

  hr {
    background-color: rgb(245, 31, 113);
    height: 6px;
    border: none;
    width: 150px;
    margin: 10px 0;
    margin: 10px auto;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 20px;
      width: 80%;
      margin: 0px auto;
    }
  }
`;

const MySkillContainer = styled.div`
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-evenly;
`;

const SkillsContainer = styled.div`
  width: 300px;
  /* height: 200px; */
  padding: 20px;
  margin: 20px;
  background-color: rgba(8, 7, 44, 0.9);
  border-radius: 10px;

  .skill-container {
    display: flex;
    flex-wrap: wrap;
    color: white;
    justify-content: center;
    align-items: center;
    div {
      font-size: 12px;
      text-transform: uppercase;
      margin: 15px;
      text-align: center;
    }
  }

  .skill-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      color: white;
      margin: 10px 0;
      text-transform: uppercase;
      text-align: center;
      width: 100%;
    }
    hr {
      background-color: rgb(133, 76, 197);
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    width: 120px;
    padding: 5px;
    margin: 10px;
    .skill-container {
      display: block;
      div {
        font-size: 10px;
        text-align: left;
        padding: 0;
        margin: 2px;
      }
    }

    .skill-header {
      h3 {
        color: black;
        font-size: 12px;
      }
    }
  }
`;
