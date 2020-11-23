import React from "react";
import logo from "../images/Logo.png";
import styled from "styled-components";


const ContainerHeader = styled.header`
  background: #ffffff;
  height: 113px;

  a {
    font-size: 16px;
    color: #666d81;
    max-width: 821px;
    height: 21px;
    padding: 20px;
  }

  img {
    margin-top: 20px;
  }

@media (max-width:768px) {
    display: grid;
    height: 435px;

    a {
    font-size: 30px;
    color: #666d81;
    max-width: 821px;
    max-height: 21px;
    padding: 20px;
  }

  img {
    margin-top: 0;
  }
 
}

/* @media (max-width:1024px) {

} */

@media (max-width:480px) {
    display: grid;
    height: 570px;

    a {
    font-size: 40px;
    color: #666d81;
    max-width: 50%;
    max-height: 21px;
    padding: 20px;
  }

  img {
    margin-top: 0;
    width: 50%;
  }
 
}

`;

const Header = () => {
  return (
    <ContainerHeader>
      <a href="#">Home</a>
      <a href="#">Pages</a>
      <a href="#">Our Services</a>
      <a href="#">
        <img src={logo} />
      </a>
      <a href="#">Recent Projects</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </ContainerHeader>
  );
};

export default Header;
