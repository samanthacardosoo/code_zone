import React from "react";
import logo from "../images/Logo.png";
import styled from "styled-components";


const ContainerHeader = styled.header`
  background: #ffffff;
  height: 113px;

  a {
    font-size: 16px;
    color: #666d81;
    padding: 2%;
  }

  img {
    margin-top: 2%;
  }

@media (max-width:768px) {
    display: grid;
    height: 360px;

    a {
    font-size: 20px;
    color: #666d81;
    max-height: 21px;
  }

  img {
    margin-top: 0;
    width: 30%;
  }
 
}

@media (max-width:480px) {
    height: 265px;

    a {
    font-size: 15px;
  }

  img {
    margin-top: 0;
    width: 25%;
  }
 
}

`;

const Header = () => {
  return (
    <ContainerHeader>
      <a href="/">Home</a>
      <a href="/">Pages</a>
      <a href="/">Our Services</a>
      <a href="/">
        <img src={logo} />
      </a>
      <a href="/">Recent Projects</a>
      <a href="/">Blog</a>
      <a href="/">Contact</a>
    </ContainerHeader>
  );
};

export default Header;
