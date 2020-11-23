import React from "react";
import styled from "styled-components"; 
import bgFooter from "../images/footer.png"

const Container = styled.footer`
  background: transparent url("${bgFooter}");
`;

const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr) 2fr;
  text-align: left;
  margin-left: 15%;

  h5 {
    font-size: 24px;
    color: #FFFFFF;
    margin-bottom: 15%;
    margin-top: 35%;
  }

  li {
    list-style-type: none;
    padding-top: 2%;
    margin-top: 5%;
    font-size: 16px;
  }

  a {
    color: #b6bbcc;
  }

  @media (max-width:1024px) {
    
}

@media (max-width:768px) {
    h5 {
        font-size: 20px
    }

    li {
        font-size: 14px;
    }

}

@media (max-width:480px) {
    
}

`;

const DivContact = styled.div `

h5 {
    font-size: 24px;
    color: #FFFFFF;
    margin-top: 11%;
    margin-bottom: 6%;
    margin-left: 10%;
    margin-top: 18%;

  }

p {
    font-size: 16px;
    padding-top: 2%;
    margin-top: 5%;
    color: #b6bbcc;
    margin-left: 10%;
  }

  @media (max-width:1024px) {
    
}

@media (max-width:768px) {
    h5 {
        font-size: 20px;
    }

    p {
        font-size: 14px;
    }

}

@media (max-width:480px) {
    
}

`

const Line = styled.div`
  border-bottom: 2px solid #b6bbcc;
  border-right: none;
  width: 75%;
  margin-left: 15%;
  margin-top: 5%;
`;

const Copyright = styled.p`
  font-size: 16px;
  color: #b6bbcc;
  margin-top: 2%;

@media (max-width:1024px) {
    
}

@media (max-width:768px) {
    font-size: 14px;

}

@media (max-width:480px) {
    
}
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
              <a href="#" style={{color:"#FF4F01"}}>About</a>
            </li>
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
        <DivContact>
          <h5>Contact</h5>
          <p>660 Broklyn Street, 88 New York, USA</p>
          <p>needhelp@dustri.com</p>
          <p>666 888 0000</p>
        </DivContact>
      </ContainerList>
      <Line />
      <Copyright>&copy; Copyright 2020 CODEZONE</Copyright>
    </Container>
  );
};

export default Footer;
