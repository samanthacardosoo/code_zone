import React from "react";
import background from "../images/Base3.png";
import play from "../images/IconPlay.svg";
import styled from "styled-components";
import Contact from "./Contact";
import FAQS from "./FAQS";

const Image = styled.div`
  background: transparent url("${background}");
  width: 100%;
  height: auto;

  h3 {
    color: #ffffff;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 50px;
    max-width: 47%;
    padding-top: 12%;
    margin-left: 25%;
  }

  img {
    margin-top: 2%;
    margin-bottom: 12%;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 40px;
      max-width: 61%;
      margin-left: 20%;
    }

    img {
      width: 50px;
    }
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 30px;
      max-width: 73%;
      margin-left: 15%;
    }

    img {
      width: 35px;
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: 480px) {
    grid-template-columns: revert;
  }
`;

const Map = styled.iframe`
  width: 100%;
  height: 558px;
  border: 0;
  margin-bottom: -1%;
`;

const Subscribe = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #ff4f01;

  p {
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
    margin: 6% 10%;
  }

  input {
    font-size: 16px;
    color: #666d81;
    width: 30%;
    max-height: 78px;
    border-radius: 5px;
    border: none;
    margin-top: 5%;
    padding-left: 2%;
  }

  button {
    width: 15%;
    max-height: 78px;
    background: #131d3b;
    border-radius: 5px;
    border: none;
    font-size: 18px;
    color: #ffffff;
    margin-top: 5%;
    margin-left: 1%;
  }

  @media (max-width: 1024px) {
    p {
      font-size: 20px;
      margin: 6% 8%;
    }

    input {
      max-height: 50px;
      font-size: 14px;
    }

    button {
      width: 17%;
      height: 50px;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 20px;
      margin: 6% 8%;
    }

    input {
      max-height: 50px;
      font-size: 14px;
    }

    button {
      width: 17%;
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    justify-content: center;

    p {
      font-size: 20px;
      margin: 6% 0;
    }

    input {
      max-height: 50px;
      width: 100%;
      font-size: 12px;
    }

    button {
      width: 50%;
      height: 40px;
      margin-bottom: 3%;
      font-size: 14px;
      margin-left: 25%;
    }
  }
`;

const Section = () => {
  return (
    <div>
      <Image>
        <h3>Dustri provides the best service for sustainable progress</h3>
        <img src={play} />
      </Image>
      <Container>
        <Contact />
        <FAQS />
      </Container>
      <Map src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14701.156122657449!2d-43.0995222!3d-22.9027078!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4db247d490b66eb5!2sCodezone!5e0!3m2!1spt-BR!2sbr!4v1605638336934!5m2!1spt-BR!2sbr" />
      <Subscribe>
        <p>Sign up to get latest updates</p>
        <input type="email" placeholder="Email Address" />
        <button>Subscribe Now</button>
      </Subscribe>
    </div>
  );
};

export default Section;
