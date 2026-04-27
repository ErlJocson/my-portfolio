import styled from "styled-components";
import { projects } from "./details/ProjectContents";

function Projects() {
  return (
    <>
      <ProjectMainContainer>
        {projects.map((project, index) => (
          <ProjectContentsContainer index={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectSubTitle>{project.subtitle}</ProjectSubTitle>
          </ProjectContentsContainer>
        ))}
      </ProjectMainContainer>
    </>
  );
}

export default Projects;

const ProjectMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
  /* background-color: black; */
  width: 80%;
`;

const ProjectContentsContainer = styled.div`
  background-color: rgba(2, 1, 16, 0.9);
  margin: 10px;
  padding: 20px;
  width: 700px;
`;

const ProjectTitle = styled.h3`
  color: white;
  margin: 10px 0;
`;

const ProjectSubTitle = styled.h5`
  color: gray;
`;
