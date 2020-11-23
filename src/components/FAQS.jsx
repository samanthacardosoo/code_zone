import React from "react";
import Icon from "../images/Icon.svg";
import styled from "styled-components";
import TextAccordion from "./Accordion";

const Title = styled.div`
  text-align: left;

  img {
    margin-top: 10%;
    margin-left: 20%;
  }

  h2 {
    letter-spacing: 3.2px;
    color: #666d81;
    font-size: 16px;
    margin-left: 20%;
    margin-top: 3%;
  }

  h1 {
    font-size: 50px;
    color: #131d3b;
    margin-left: 20%;
    margin-top: 3%;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 14px;
    }

    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 12px;
    }

    h1 {
      font-size: 30px;
    }
  }
`;

const FAQS = () => {
  return (
    <div>
      <Title>
        <img src={Icon} />
        <h2>OUR FAQS</h2>
        <h1>Frequently Asked Questions</h1>
      </Title>
      <TextAccordion />
    </div>
  );
};

export default FAQS;
