import styled from "styled-components";
import { useState } from "react";

function ContactMe() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
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
        setResult("Success!");
        event.target.reset();
      } else {
        setResult("Error: Submission failed");
      }
    } catch (error) {
      setResult("Error: Network issue");
    }
  };

  return (
    <MainContactContainer>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <textarea name="message" required></textarea>
        <button type="submit">Submit</button>
        <p>{result}</p>
      </form>
    </MainContactContainer>
  );
}

export default ContactMe;

const MainContactContainer = styled.div``;
