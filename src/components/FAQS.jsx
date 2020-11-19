import React from "react";
import Icon from "../images/Icon.svg";
import styled from "styled-components"; //DELETAR

const Title = styled.div`
  width: 512px;
  height: 687px;
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
      {/* How to process the funtion for construction?
                Where should I incorporate my business?
                    There are many variations of passages of available but the majority have suffered alteration in that some form by injected randomised words which don’t look even as slightly believable now.
                How there are many variations of passages 
                What about our safety measures ? */}
    </div>
  );
};

export default FAQS;
