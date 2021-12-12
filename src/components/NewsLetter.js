import React, { useState } from "react";
import { Form, NewsLetterStyle } from "./styled/NewsLetter.styled";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <NewsLetterStyle>
      <h1>Subscribe to our Newsletter Today</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magnaLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna
      </div>

      <Form>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address "
        />
        <button onClick={handleSubmit}>Subscribe</button>
      </Form>
    </NewsLetterStyle>
  );
};

export default NewsLetter;
