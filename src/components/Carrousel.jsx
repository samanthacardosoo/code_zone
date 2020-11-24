import React from "react";
import styled from "styled-components";
import background from "../images/BG1.png";

const Img = styled.div`
  background: transparent url("${background}");
  align-items: center;
  overflow-y: hidden;
  z-index: -1;
`;

const Text = styled.div`
  p {
    background: #131d3b;
    opacity: 0.1;
    padding: 5px;
    width: 20%;
    margin: 10% 0 0 41%;
    letter-spacing: 3.2px;
    color: #ffffff;
    font-size: 16px;
  }

  h1 {
    font-size: 100px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    border: solid 15px #ff4f01;
    opacity: 1;
    width: 60%;
    margin: 5% 0 5% 20%;
    background: #131d3b38;
  }

  button {
    margin-bottom: 5%;
    width: 20%;
    height: 78px;
    background: #ff4f01;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    text-align: center;
    font-size: 18px;
    opacity: 1;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 50px;
    }

    button {
      width: 25%;
      height: 45px;
      font-size: 16px;
    }
  }
`;

const Caroussel = () => {
  return (
    <Img>
      <Text>
        <p>BUILD ANYTHING WITH US</p>
        <h1>We're always ready for a challenge</h1>
        <button>Discover More</button>
      </Text>
    </Img>
  );
};

export default Caroussel;
