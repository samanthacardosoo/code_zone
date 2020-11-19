import React from "react";
import styled from "styled-components"; //DELETAR
import bgFooter from "../images/footer.png"

const Container = styled.footer`
  width: 1920px;
  height: 589px;
  background: transparent url("${bgFooter}") 0% 0% no-repeat padding-box;
`;

const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 1169px;
  height: 241px;
  text-align: left;
  margin: 0px 0px 130px 384px;

  h5 {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 24px;
    color: #FFFFFF;
    width: 56px;
    height: 32px;
    margin-top: 125px
  }

  li {
    list-style-type: none;
    padding-top: 13px;
    margin-top: 10px;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: #b6bbcc;
    width: 84px;
    height: 181px;
  }

  p {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 16px;
    padding-top: 13px;
    margin-top: 10px;
    color: #b6bbcc;
    width: 235px;
  }
`;

const Line = styled.div`
  border-bottom: 2px solid #b6bbcc;
  border-right: none;
  width: 70%;
  height: 140px;
  margin-left: 322px;
`;

const Copyrigth = styled.p`
  font-family: "Roboto Condensed", sans-serif;
  font-size: 16px;
  color: #b6bbcc;
  margin-top: 30px;
`;

const Footer = () => {
  return (
    <Container>
      <ContainerList>
        <div>
          <h5>About</h5>
          <ul>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>{" "}
            {/*//FOCO!!!!*/}
            <li>
              <a href="#">New Projects</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
            <li>
              <a href="#">History</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Explore</h5>
          <ul>
            <li>
              <a href="#">Press Release</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog Posts</a>
            </li>
            <li>
              <a href="#">Social Connect</a>
            </li>
            <li>
              <a href="#">Help Topics</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Links</h5>
          <ul>
            <li>
              <a href="#">Podcasts</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Videos</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Blog</h5>
          <ul>
            <li>
              <a href="#">How to build a home plan</a>
            </li>
            <li>
              <a href="#">Industy and factory business</a>
            </li>
            <li>
              <a href="#">We design innovative building</a>
            </li>
            <li>
              <a href="#">Sucessful engineering team</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <p>660 Broklyn Street, 88 New York, USA</p>
          <p>needhelp@dustri.com</p>
          <p>666 888 0000</p>
        </div>
      </ContainerList>
      <Line />
      <Copyrigth>&copy; Copyright 2020 CODEZONE</Copyrigth>
    </Container>
  );
};

export default Footer;
