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
  const [showProject7, setShowProject7] = useState(false);
  return (
    <Container>
      <Fade bottom>
        <ProjectContainer>
          <h3
            className="gray-hover"
            onClick={() => setShowProject1(!showProject1)}
          >
            {showProject1 ? (
              <i className="fa-solid fa-minus red"></i>
            ) : (
              <i className="fa-solid fa-plus green"></i>
            )}{" "}
            Reminder app
          </h3>
          {showProject1 ? (
            <div>
              <Zoom>
                <img
                  src={process.env.PUBLIC_URL + "/reminder-app.png"}
                  alt=""
                />
              </Zoom>
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
        <ProjectContainer>
          <h3
            className="gray-hover"
            onClick={() => setShowProject7(!showProject7)}
          >
            {showProject7 ? (
              <i className="fa-solid fa-minus red"></i>
            ) : (
              <i className="fa-solid fa-plus green"></i>
            )}{" "}
            Quotes API
          </h3>
          {showProject7 ? (
            <div>
              <Zoom>
                <img src={process.env.PUBLIC_URL + "/quotesAPI.png"} alt="" />
              </Zoom>
              <ul>
                <Zoom>
                  <li>Built using Java (spring framework)</li>
                  <li>
                    This project allows anyone to upload a quote into a
                    database.
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
                </Zoom>
              </ul>
            </div>
          ) : (
            ""
          )}
        </ProjectContainer>
      </Fade>

      <Fade bottom>
        <ProjectContainer>
          <h3
            className="gray-hover"
            onClick={() => setShowProject2(!showProject2)}
          >
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
                <img src={process.env.PUBLIC_URL + "/ecom.png"} alt="" />
              </Zoom>
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
        <ProjectContainer>
          <h3
            className="gray-hover"
            onClick={() => setShowProject3(!showProject3)}
          >
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
                <img
                  src={process.env.PUBLIC_URL + "/random-quote.png"}
                  alt=""
                />
              </Zoom>
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
        <ProjectContainer>
          <h3
            className="gray-hover"
            onClick={() => setShowProject4(!showProject4)}
          >
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
                <img
                  src={process.env.PUBLIC_URL + "/css-template.png"}
                  alt=""
                />
              </Zoom>
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
        <ProjectContainer>
          <h3
            className="gray-hover"
            onClick={() => setShowProject5(!showProject5)}
          >
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
                <img
                  src={process.env.PUBLIC_URL + "/css-animations.png"}
                  alt=""
                />
              </Zoom>
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
        <ProjectContainer>
          <h3
            className="gray-hover"
            onClick={() => setShowProject6(!showProject6)}
          >
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
                <img src={process.env.PUBLIC_URL + "/port.png"} alt="" />
              </Zoom>
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
  background: var(--background-color);
  color: white;
  &:hover {
    background-color: white;
  }
  h3 {
    cursor: pointer;
  }
  div {
    margin: 30px 0;
    display: flex;
    align-items: center;
    img {
      width: 600px;
      height: 350px;
      box-shadow: 0 2px 10px gray;
    }
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

  @media screen and (max-width: 1200px) {
    div {
      flex-direction: column;
      img {
        width: 600px;
        height: 350px;
      }
    }
  }

  @media screen and (max-width: 800px) {
    div {
      img {
        width: 300px;
        height: 150px;
      }
      ul {
        margin-left: 40px;
      }
    }
  }
`;
