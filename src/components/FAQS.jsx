import React from "react";
import Icon from "../images/Icon.svg";
import styled from "styled-components"; //DELETAR
import TextAccordion from "./Accordion";


const Title = styled.div`
  width: 512px;
  font-family: "Roboto Condensed", sans-serif;
  text-align: left;

  img {
    margin-top: 120px;
    margin-left: 163px;
  }

  p {
    letter-spacing: 3.2px;
    color: #666d81;
    font-size: 16px;
    margin-left: 163px;
    margin-top: 15px;
  }

  h3 {
    font-size: 50px;
    color: #131d3b;
    margin-left: 163px;
    margin-top: 15px;
  }
`;

const FAQS = () => {
  return (
    <div>
      <Title>
        <img src={Icon} />
        <p>OUR FAQS</p>
        <h3>Frequently Asked Questions</h3>
      </Title>
      <TextAccordion/>
    </div>
  );
};

export default FAQS;
