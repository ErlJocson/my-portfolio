import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

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
  ];

  const softSkills = ["Problem-solving", "Analytical thinking", "Teamwork"];

  return (
    <>
      <MySkillContainer id="skills">
        <Fade bottom>
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
        </Fade>
        <Fade bottom>
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
        </Fade>
        <Fade bottom>
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
        </Fade>
      </MySkillContainer>
    </>
  );
}

export default Skills;

const MySkillContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const SkillsContainer = styled.div`
  width: 300px;
  padding: 20px;
  margin: 20px;
  background-color: white;
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
      border-bottom: solid 1px black;
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
`;
