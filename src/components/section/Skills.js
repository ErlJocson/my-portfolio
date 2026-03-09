import React from "react";
import styled from "styled-components";

function Skills() {
  const programmingSkills = [
    "Python",
    "Flask",
    "Django",
    "JavaScript",
    "React",
    "SQL",
    "HTML",
    "CSS",
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
    "Data Visualization",
    "Data Analysis",
    "Problem-solving",
    "Analytical thinking",
    "Teamwork",
  ];

  return (
    <>
      <SkillsMainContainer>
        <h1>Things i Bring to the Table</h1>
        <hr />
        <MySkillContainer id="skills">
          <SkillsContainer>
            <div className="skill-header gray-hover">
              <h3>Data Analytics</h3>
            </div>
            <div className="skill-container">
              {dataAnalytics.map((skills, id) => {
                return <div key={id}>{skills}</div>;
              })}
            </div>
          </SkillsContainer>
          <SkillsContainer>
            <div className="skill-header gray-hover">
              <h3>Programming skills</h3>
            </div>
            <div className="skill-container">
              {programmingSkills.map((skills, id) => {
                return <div key={id}>{skills}</div>;
              })}
            </div>
          </SkillsContainer>
          <SkillsContainer>
            <div className="skill-header gray-hover">
              <h3>Tools and technologies</h3>
            </div>
            <div className="skill-container">
              {tools.map((skill, id) => {
                return <div key={id}>{skill}</div>;
              })}
            </div>
          </SkillsContainer>
          <SkillsContainer>
            <div className="skill-header gray-hover">
              <h3>Soft skills</h3>
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
  border-bottom: 6px solid #0db3e6;
  flex-direction: column;
  padding: 10px;

  h1 {
    margin-top: 60px;
    color: white;
    text-transform: uppercase;
    text-align: center;
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
      margin-top: 10px;
    }
  }
`;

const MySkillContainer = styled.div`
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const SkillsContainer = styled.div`
  width: 300px;
  padding: 20px;
  margin: 20px;
  background-color: rgba(255, 255, 255);
  box-shadow: var(--great-shadow);
  border-radius: 10px;

  .skill-container {
    display: flex;
    flex-wrap: wrap;
    color: black;
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
    h3 {
      color: black;
      text-transform: uppercase;
      text-align: center;
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    width: 120px;
    padding: 5px;
    margin: 20px;
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
