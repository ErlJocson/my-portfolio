import Container from "./components/Container";
import Title from "./components/Title";
import styled from "styled-components";
import projects from "./link/project";

function Project() {
  return (
    <Container>
      <Title>Projects</Title>
      <SomeContainer>
        {projects.map((project, id) => (
          <ProjectContainer>
            <h3>{project.project}</h3>
            <img src={process.env.PUBLIC_URL + project.img} alt="" />
            <a href={project.link}>View project</a>
          </ProjectContainer>
        ))}
      </SomeContainer>
    </Container>
  );
}

export default Project;

const SomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
  border: 1px solid rgb(213, 213, 213);
  &:hover {
    box-shadow: 0 2px 6px rgb(118, 118, 118);
  }

  img {
    width: 300px;
    height: 200px;
    margin: 20px 0;
    border: 1px solid rgb(213, 213, 213);
  }
`;
