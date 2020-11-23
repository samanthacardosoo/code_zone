import React from "react";
import styled from "styled-components";
import background from "../images/BG1.png";

const Img = styled.div`
  /* display: flex;
    align-items: center;
    overflow-y: hidden;                                FAZER CARROSSEL!!!!!!!!!!
    --n: 4;
    width: calc(var(--4)*100%); */
  //width: 1920px;
  //height: 828px;
  background: transparent url("${background}") 0% 0% no-repeat padding-box;
  align-items: center;
  overflow-y: hidden;
  //opacity: 0.43;
  z-index: -1;

  /* @media (max-width:1024px) {
    width: 100%;  
    height: auto;
}

@media (max-width:768px) {
    width: 100%;
    height: auto;
    object-fit: cover;
}

@media (max-width:480px) {
    width: 100%;
    height: auto;
    object-fit: cover;
    
} */
`

const Text = styled.div `
  p {
    //margin-top: 231px;
    //margin-left: 799px;
    background: #131D3B;
    opacity: 0.1;
    padding: 5px;
    width: 20%;
    margin: 10% 0 0 41%;
    letter-spacing: 3.2px;
    color: #ffffff;
    font-size: 16px;
  }

  h1 {
    //margin-top: 20px;
    //margin-left: 535px;
    //max-width: 765px;
    ///height: 252px;
    font-size: 100px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    border: solid 15px #ff4f01;
    opacity: 1;
    width: 60%;
    margin: 5% 0 5% 20%;
    background: #131d3b38
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

  @media (max-width:1024px) {

  }

  @media (max-width:768px) {
      
}

@media (max-width:480px) {
    
      
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
