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

  p {
    letter-spacing: 3.2px;
    color: #666d81;
    font-size: 16px;
    margin-left: 20%;
    margin-top: 3%;
  }

  h3 {
    font-size: 50px;
    color: #131d3b;
    margin-left: 20%;
    margin-top: 3%;
  }

  @media (max-width:1024px) {
    
}

@media (max-width:768px) {

    p {
        font-size: 14px;
    }

    h3 {
        font-size: 40px;
    }

}

@media (max-width:480px) {
    
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
