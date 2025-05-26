import React from "react";
import styled from "styled-components";

function Project() {
  return (
    <MyContainer id="projects">
      <Title>Project Portfolio</Title>
      <hr />
      <Projects>
        <ProjectContainer>
          <h3>Reminder app</h3>
          <div>
            <ul>
              <li>Built using Python (Django) and bootstrap</li>
              <li>
                This project allows users to create an account and post
                reminders. Users can delete their reminders and their account.
              </li>
              <li>Deployed in Heroku</li>
              <li>
                <a
                  href="https://reminder-app12.herokuapp.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Click here to view the website
                </a>
              </li>
            </ul>
          </div>
        </ProjectContainer>

        <ProjectContainer>
          <h3>Quotes API</h3>
          <div>
            <ul>
              <li>Built using Java (spring framework)</li>
              <li>
                This project allows anyone to upload a quote into a database.
              </li>
              <li>Deployed in Heroku</li>
              <li>
                <a
                  href="https://erljocson.github.io/quote-documentation/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Click here to view the documentation
                </a>
              </li>
            </ul>
          </div>
        </ProjectContainer>

        <ProjectContainer>
          <h3>E-commerce website</h3>
          <div>
            <ul>
              <li>Built using Python (Django)</li>
              <li>
                Developed using the built in Django authentication system for
                the security and used the default connection of Django to SQLite
                for managing the database.
              </li>
              <li>
                This website allows user to buy items, sell items, and cancel
                orders
              </li>
              <li>
                <a
                  href="https://ecommerce-web-application1.herokuapp.com/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Click here to view the website
                </a>
              </li>
            </ul>
          </div>
        </ProjectContainer>
        <ProjectContainer>
          <h3>Random Quote Website</h3>
          <div>
            <ul>
              <li>
                Used Axios to make an API call to Programming Quotes API and
                display response to the webpage.
              </li>
              <li>Built using React.js and deployed in GitHub pages</li>
              <li>
                <a
                  href="https://erljocson.github.io/quote-website/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Click here to view the website
                </a>
              </li>
            </ul>
          </div>
        </ProjectContainer>
        <ProjectContainer>
          <h3>CSS Templates</h3>
          <div>
            <ul>
              <li>
                This are my CSS templates that are deployed and free to use by
                other developers to help them develop their projects
              </li>
              <li>It helps minimize typing and looking up for syntax</li>
              <li>Built using React.js and deployed in GitHub pages</li>
              <li>
                <a
                  href="https://erljocson.github.io/css-template/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Click here to view the website
                </a>
              </li>
            </ul>
          </div>
        </ProjectContainer>
        <ProjectContainer>
          <h3>CSS Animations</h3>
          <div>
            <ul>
              <li>
                This are my CSS animations that are deployed and free to use by
                other developers to help them develop their projects
              </li>
              <li>It helps minimize typing and looking up for syntax</li>
              <li>Built using React.js and deployed in GitHub pages</li>
              <li>
                <a
                  href="https://erljocson.github.io/css-animations"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Click here to view the website
                </a>
              </li>
            </ul>
          </div>
        </ProjectContainer>
      </Projects>
    </MyContainer>
  );
}

export default Project;

const MyContainer = styled.div`
  background-image: url(${process.env.PUBLIC_URL + "/images/program.jpg"});
  background-size: cover;
  background-position: center;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  hr {
    background-color: rgb(245, 31, 113);
    height: 6px;
    border: none;
    width: 150px;
    margin: 10px 0;
    margin: 10px auto;
  }
`;

const Projects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ProjectContainer = styled.div`
  padding: 20px;
  margin: 20px;
  background-color: white;
  width: 400px;
  height: 150px;
  box-shadow: var(--great-shadow);
  border-radius: 10px;
  h3 {
    text-align: center;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  ul {
    li {
      margin: 4px 0;
      font-size: 12px;
      a {
        color: gray;
      }

      a:hover {
        color: black;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    & {
      padding: 10px;
      width: 300px;
    }
  }

  @media screen and (max-width: 700px) {
    width: 290px;
    ul {
      li {
        margin-left: 20px;
      }
    }
  }
`;

const Title = styled.h1`
  color: white;
  text-transform: uppercase;
`;
