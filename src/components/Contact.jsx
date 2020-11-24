import React from "react";
import Icon from "../images/IconBlack.svg";
import styled from "styled-components";

const Area = styled.div`
  width: 100%;
  height: 845px;
  background: #ff4f01;
  text-align: left;
  margin-top: -15%;
  border-radius: 0px 5px 5px 0px;

  img {
    margin-top: 10%;
    margin-left: 25%;
  }

  p {
    letter-spacing: 3.2px;
    color: #ffdccd;
    font-size: 16px;
    margin-left: 25%;
    margin-top: 2%;
  }

  h3 {
    font-size: 50px;
    color: #ffffff;
    margin-left: 25%;
    margin-top: 2%;
  }

  form {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    margin-left: 25%;
    margin-top: 8%;
  }

  input {
    height: 5%;
    width: 70%;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    padding: 5%;
  }

  #textarea {
    height: 70%;
    width: 70%;
  }

  button {
    width: 35%;
    height: 78px;
    background: #131d3b;
    border-radius: 5px;
    color: #ffffff;
    font-size: 18px;
    margin-top: 12%;
  }

  @media (max-width: 768px) {
    p {
      font-size: 14px;
    }

    h3 {
      font-size: 40px;
    }

    input {
      height: 10px;
    }

    button {
      width: 60%;
      height: 55px;
    }
  }

  @media (max-width: 480px) {
    height: 440px;
    margin-top: 0;

    p {
      font-size: 12px;
    }

    h3 {
      font-size: 30px;
    }

    input {
      height: 8px;
      font-size: 12px;
    }

    button {
      width: 50%;
      height: 40px;
      font-size: 14px;
    }
  }
`;

const Contact = () => {
  return (
    <Area>
      <img src={Icon} alt=""/>
      <p>CONTACT US</p>
      <h3>Request a Quote</h3>
      <form>
        <input 
          name="name" 
          required="required" 
          placeholder="Your Name"
        />
        <input
          name="email"
          type="email"
          required="required"
          placeholder="Email Address"
        />
        <input
          name="phone"
          type="tel"
          required="required"
          placeholder="Phone Number"
        />
        <input
          name="msg"
          required="required"
          placeholder="Write Message"
          id="textarea"
        />
        <button type="submit">Get a Free Quote</button>
      </form>
    </Area>
  );
};

export default Contact;
