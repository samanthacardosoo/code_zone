import React from "react";
import logo from "../images/Logo.png";
import styled from "styled-components"; //deleltar!
//import {} from '../styles'

const ContainerHeader = styled.header`
  background: #ffffff 0% 0% no-repeat padding-box;
  width: 1920px;
  height: 113px;

  a {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 16px;
    padding: 20px;
    text-decoration: none;
    width: 821px;
    height: 21px;
    color: #666d81;
  }

  img {
    margin-top: 20px;
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
