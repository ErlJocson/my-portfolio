import styled from "styled-components";

function Projects() {
  return (
    <>
      <CommingSoon>
        <p>Underconstruction</p>
      </CommingSoon>
    </>
  );
}

export default Projects;

const CommingSoon = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 100px;
    color: white;
  }
`;
