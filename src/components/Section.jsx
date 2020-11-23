import React from "react";
import background from "../images/Base3.png";
import play from "../images/IconPlay.svg";
import styled from "styled-components"; //DELETAR
import Contact from "./Contact";
import FAQS from "./FAQS";

const Image = styled.div`
  background: transparent url("${background}") 0% 0% no-repeat padding-box;
  height: 625px;
  width: 1920px;

  h3 {
    color: #ffffff;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 50px;
    height: 145px;
    width: 579px;
    padding-top: 132px;
    padding-left: 667px;
  }

  img {
    height: 82px;
    width: 73px;
    margin-top: 30px;
    cursor: pointer;
  }
`;

const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
`

const Map = styled.iframe`
  width: 1920px;
  height: 558px;
  border: 0;
  margin-left: -105px;
  margin-bottom: -5px;
`;

const Subscribe = styled.div`
display: flex;
flex-wrap: wrap;
  width: 1920px;
  height: 198px;
  background: #ff4f01;

  p {
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 30px;
      font-weight: bold;
      color: #FFFFFF;
      margin: 77px 170px 5px 366px;
  }

  input {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;
    color: #666D81;
    width: 456px;
    height: 78px;
    border-radius: 5px;
    border: none;
    margin-top: 60px;
    padding-left: 30px;
  }

  button {
    width: 229px;
    height: 78px;
    background: #131D3B;
    border-radius: 5px;
    border: none;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 18px;
    color: #FFFFFF;
    margin-top: 60px;
    margin-left: 15px;
    
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
