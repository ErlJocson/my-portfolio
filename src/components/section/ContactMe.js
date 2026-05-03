import styled from "styled-components";
import { useState } from "react";

function ContactMe() {
  const [result, setResult] = useState("");
  const [buttonDisable, setButtonDisable] = useState(false);

  const onSubmit = async (event) => {
    setButtonDisable(true);
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "bfb49fc7-a958-42f5-b559-3e6746afe77b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Your Email was Sent!!");
        event.target.reset();
      } else {
        setResult("Your Email was not Sent. Please try again later");
      }
    } catch (error) {
      setResult("Your Email was not Sent. Connection is Low");
    }

    setButtonDisable(false);
  };

  return (
    <MainContainer>
      <ContactCard>
        <Header className="border-bottom-blue">
          <h1>Contact Me</h1>
          <p>Interested in collaboration, analytics, or development work?</p>
        </Header>

        <FormContainer onSubmit={onSubmit}>
          <Row>
            <input
              type="text"
              name="name"
              placeholder="Name or Alias"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </Row>

          <input type="text" name="subject" placeholder="Subject" required />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" disabled={buttonDisable}>
            Send Message
          </button>

          {result && <p className="result">{result}</p>}
        </FormContainer>
      </ContactCard>
    </MainContainer>
  );
}

export default ContactMe;

const MainContainer = styled.div`
  height: calc(100vh - 62px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactCard = styled.div`
  width: 100%;
  max-width: 850px;
  background-color: rgba(8, 7, 44, 0.9);
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

const Header = styled.div`
  padding: 50px 40px;
  text-align: center;
  color: white;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  p {
    opacity: 0.9;
    font-size: 0.95rem;
  }

  @media screen and (max-width: 800px) {
    padding: 30px 20px;

    h1 {
      font-size: 20px;
    }

    p {
      font-size: 12px;
    }
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;

  input,
  textarea {
    border: none;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 10px;
    font-size: 1rem;
    outline: none;
    transition: 0.2s;
  }

  input:focus,
  textarea:focus {
    background: #e5e7eb;
  }

  textarea {
    resize: none;
    min-height: 150px;
  }

  button {
    border: none;
    padding: 16px;
    border-radius: 10px;
    background: rgb(0, 132, 255);
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  button:hover {
    transform: translateY(-2px);
  }

  .result {
    text-align: center;
    color: white;
    font-size: 0.95rem;
  }

  @media screen and (max-width: 800px) {
    gap: 10px;
    padding: 20px;

    input,
    textarea {
      padding: 10px;
      font-size: 0.75rem;
    }

    button {
      font-size: 0.75rem;
      padding: 10px;
    }

    .result {
      font-size: 0.75rem;
    }
  }
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  input {
    flex: 1;
    min-width: 0;
    box-sizing: border-box;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 10px;

    input {
      width: 100%;
    }
  }
`;
