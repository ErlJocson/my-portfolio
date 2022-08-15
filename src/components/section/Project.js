import React from "react";
import Container from "./section-components/Container";
import styled from "styled-components";
import { useState } from "react";
import { Fade, Zoom } from "react-reveal";

function Project() {
  const [showProject1, setShowProject1] = useState(false);
  const [showProject2, setShowProject2] = useState(false);
  const [showProject3, setShowProject3] = useState(false);
  const [showProject4, setShowProject4] = useState(false);
  const [showProject5, setShowProject5] = useState(false);
  const [showProject6, setShowProject6] = useState(false);

  return (
    <Container>
      <Fade bottom>
        <ProjectContainer onClick={() => setShowProject1(!showProject1)}>
          <h3 className="gray-hover">
            {showProject1 ? (
              <i className="fa-solid fa-minus red"></i>
            ) : (
              <i className="fa-solid fa-plus green"></i>
            )}{" "}
            Reminder app
          </h3>
          {showProject1 ? (
            <div>
              <ul>
                <Zoom>
                  <li>Built using Python (Django) and bootstrap</li>
                  <li>
                    This project allows users to create an account and post
                    reminders. Users can delete their reminders and their
                    account.
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
                </Zoom>
              </ul>
            </div>
          ) : (
            ""
          )}
        </ProjectContainer>
      </Fade>
      <Fade bottom>
        <ProjectContainer onClick={() => setShowProject2(!showProject2)}>
          <h3 className="gray-hover">
            {showProject2 ? (
              <i className="fa-solid fa-minus red"></i>
            ) : (
              <i className="fa-solid fa-plus green"></i>
            )}{" "}
            E-commerce website
          </h3>
          {showProject2 ? (
            <div>
              <Zoom>
                <ul>
                  <li>Built using Python (Django)</li>
                  <li>
                    Developed using the built in Django authentication system
                    for the security and used the default connection of Django
                    to SQLite for managing the database.
                  </li>
                  <li>
                    This website allows user to buy items, sell items, and
                    cancel orders
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
              </Zoom>
            </div>
          ) : (
            ""
          )}
        </ProjectContainer>
      </Fade>
      <Fade bottom>
        <ProjectContainer onClick={() => setShowProject3(!showProject3)}>
          <h3 className="gray-hover">
            {showProject3 ? (
              <i className="fa-solid fa-minus red"></i>
            ) : (
              <i className="fa-solid fa-plus green"></i>
            )}{" "}
            Random Quote Website
          </h3>
          {showProject3 ? (
            <div>
              <Zoom>
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
              </Zoom>
            </div>
          ) : (
            ""
          )}
        </ProjectContainer>
      </Fade>
      <Fade bottom>
        <ProjectContainer onClick={() => setShowProject4(!showProject4)}>
          <h3 className="gray-hover">
            {showProject4 ? (
              <i className="fa-solid fa-minus red"></i>
            ) : (
              <i className="fa-solid fa-plus green"></i>
            )}{" "}
            CSS Templates
          </h3>
          {showProject4 ? (
            <div>
              <Zoom>
                <ul>
                  <li>
                    This are my CSS templates that are deployed and free to use
                    by other developers to help them develop their projects
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
              </Zoom>
            </div>
          ) : (
            ""
          )}
        </ProjectContainer>
      </Fade>
      <Fade bottom>
        <ProjectContainer onClick={() => setShowProject5(!showProject5)}>
          <h3 className="gray-hover">
            {showProject5 ? (
              <i className="fa-solid fa-minus red"></i>
            ) : (
              <i className="fa-solid fa-plus green"></i>
            )}{" "}
            CSS Animations
          </h3>
          {showProject5 ? (
            <div>
              <Zoom>
                <ul>
                  <li>
                    This are my CSS animations that are deployed and free to use
                    by other developers to help them develop their projects
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
              </Zoom>
            </div>
          ) : (
            ""
          )}
        </ProjectContainer>
      </Fade>
      <Fade bottom>
        <ProjectContainer onClick={() => setShowProject6(!showProject6)}>
          <h3 className="gray-hover">
            {showProject6 ? (
              <i className="fa-solid fa-minus red"></i>
            ) : (
              <i className="fa-solid fa-plus green"></i>
            )}{" "}
            My portfolio
          </h3>
          {showProject6 ? (
            <div>
              <Zoom>
                <ul>
                  <li>Built using React.js and styled components</li>
                  <li>
                    This website contains my skills, education, and projects
                    I've done in the past
                  </li>
                  <li>Deployed in GitHub pages</li>
                  <li>
                    <a
                      href="https://erljocson.github.io/my-portfolio/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Click here to view the website
                    </a>
                  </li>
                </ul>
              </Zoom>
            </div>
          ) : (
            ""
          )}
        </ProjectContainer>
      </Fade>
    </Container>
  );
}

export default Project;

const ProjectContainer = styled.div`
  box-shadow: var(--dark-shadow);
  padding: 20px;

  border: 6px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to left,
    rgba(230, 131, 131, 1) 0%,
    rgba(255, 255, 255, 1) 46%,
    rgba(144, 195, 210, 1) 99%
  );

  margin: 20px 0;
  cursor: pointer;
  background: var(--background-color);
  color: white;
  &:hover {
    background-color: white;
  }

  div {
    ul {
      margin-top: 10px;
      margin-left: 60px;
      li {
        margin: 4px 0;
        a {
          color: gray;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    div {
      ul {
        margin-left: 40px;
      }
    }
  }
`;