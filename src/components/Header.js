import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer id="header" className="border-bottom-blue">
      <img src={process.env.PUBLIC_URL + "/profile.jpeg"} alt="" />
      <ContentContainer>
        <HeaderContent>
          <h1>ERL JERRALD JOCSON, CLSSGB</h1>
          <hr />
          <p>
            Obtained a <em>Bachelors degree in Mathematics</em> from Laguna
            State Polytechnic University, where I built a strong foundation in
            problem-solving and analytical thinking
          </p>
          <p>
            Since then, I've applied these skills in real-world
            settings—leveraging data analytics, automation, and statistical
            modeling to{" "}
            <em>
              drive business excellence, optimize operations, and support
              data-driven decision-making at scale
            </em>
          </p>
          <p>
            I also earned a Lean Six Sigma Green Belt certification, which enhanced
            my ability to apply structured problem-solving frameworks (DMAIC) and
            statistical analysis to identify inefficiencies, improve processes, 
            and build more impactful, data-driven solutions.
          </p>
        </HeaderContent>
      </ContentContainer>
    </HeaderContainer>
  );
}

export default Header;

const ContentContainer = styled.div`
`;

const HeaderContent = styled.div`
  box-shadow: var(--dark-shadow);
  width: 800px;
  margin: 20px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(15, 11, 11, 0.9);
  padding: 20px;

  h1 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  p {
    font-size: 15px;
    margin: 10px;
    text-align: left;
    em {
      color: rgb(245, 31, 113);
    }
  }

  hr {
    background-color: #0db3e6;
    height: 3px;
    border: none;
    width: 80%;
  }

  @media screen and (max-width: 800px) {
    & {
      width: 300px;
      p {
        font-size: 12px;
      }
    }

    h1 {
      font-size: 20px;
    }
  }
`;

const HeaderContainer = styled.div`
  img {
    box-shadow: var(--dark-shadow);
    border-radius: 10px;
    height: 600px;
  }

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  overflow: hidden;
  background-image: url(${process.env.PUBLIC_URL + "/images/coffee.jpg"});
  background-size: cover;
  background-position: center;
  padding: 30px 100px;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
  padding: 50px 0;
    img {
      height: 200px;
      border-radius: 10px;
      margin-bottom: 20px;
    }
  }
`;
