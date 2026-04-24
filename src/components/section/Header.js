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
            Data Scientist with a strong foundation in mathematics, statistics,
            and research analysis. Graduated with a Bachelor of Science in
            Mathematics and experienced in transforming complex data into
            meaningful insights that support business decision-making,
            operational improvement, and strategic initiatives.
          </p>
          <p>
            Experienced in statistical analysis, predictive analytics, business
            intelligence, and research-driven problem solving. Has worked with
            large-scale datasets, developed analytical reports and dashboards,
            conducted quantitative and qualitative research, and applied
            data-driven methodologies to identify trends, risks, and
            opportunities across business operations.
          </p>
          <p>
            Certified Lean Six Sigma Green Belt professional with a focus on
            process improvement, analytical thinking, and continuous
            optimization. Committed to applying statistical reasoning and data
            science methodologies to solve real-world business challenges and
            support data-informed decision-making.
          </p>
        </HeaderContent>
      </ContentContainer>
    </HeaderContainer>
  );
}

export default Header;

const ContentContainer = styled.div``;

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
    border-radius: 50%;
    height: 600px;
    border: 2px solid gray;
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
      border-radius: 50%;
      margin-bottom: 20px;
    }
  }
`;
