import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_ko4827n",
        "template_i0mstpx",
        form.current,
        "-UjE_weagvP_Aj_nl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  // -UjE_weagvP_Aj_nl
  return (
    <ContactContainer id="contact">
      <Title>Contact me</Title>
      <form ref={form} onSubmit={sendEmail}>
        <div className="inputs">
          <label>Name: </label>
          <input type="text" name="user_name" required />
        </div>
        <div className="inputs">
          <label>Email: </label>
          <input type="email" name="user_email" required />
        </div>
        <div className="inputs">
          <label>Message: </label>
          <textarea name="message" required />
        </div>
        <div className="submit-button">
          <input type="submit" value="Send message" />
        </div>
      </form>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 500px;
    box-shadow: var(--great-shadow);
    border-radius: 10px;
    div {
      margin: 10px 0;
    }

    .inputs {
      display: flex;
      flex-direction: column;
      label {
        margin: 10px 0;
      }
      input {
        padding: 10px;
        background-color: aliceblue;
      }

      textarea {
        background-color: aliceblue;
        padding: 10px;
        resize: none;
        height: 10vh;
      }
    }

    .submit-button {
      text-align: center;
      input {
        padding: 10px;
        background-color: #0db3e6;
        border-radius: 10px;
        border-color: white;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    form {
      width: 400px;
      .inputs {
        input {
          padding: 5px;
        }

        textarea {
          padding: 5px;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    form {
      padding: 10px;
      width: 300px;
      .inputs {
        label {
          margin: 5px 0;
        }
      }
      div {
        margin: 0;
      }
    }
  }
`;

const Title = styled.h3`
  margin: 30px 0 18px 0;
  color: white;
  text-transform: uppercase;
`;
