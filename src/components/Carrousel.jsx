import React, { useRef } from "react";
import styled from "styled-components"; //DELETAR
import background from "../images/BG1.png";
import useSlider from "../hooks/useSlider"
import Images from "../images/carousel"

const Img = styled.div`
  /* display: flex;
    align-items: center;
    overflow-y: hidden;                                FAZER CARROSSEL!!!!!!!!!!
    --n: 4;
    width: calc(var(--4)*100%); */
  width: 1920px;
  height: 828px;
  background: transparent url("${Images}") 0% 0% no-repeat padding-box;
  align-items: center;
  overflow-y: hidden;
  opacity: 0.43;
  z-index: -1;
`

const Text = styled.div `
  p {
    margin-top: 231px;
    margin-left: 799px;
    background: #131D3B;
    opacity: 0.1;
    padding: 5px;
    width: 241px;
    height: 21px;
    letter-spacing: 3.2px;
    color: #ffffff;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 16px;
  }

  h1 {
    margin-top: 20px;
    margin-left: 535px;
    width: 765px;
    height: 252px;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 100px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    border: solid 15px #ff4f01;
    opacity: 1;
  }

  button {
    margin-top: 50px;
    width: 226px;
    height: 78px;
    background: #ff4f01 0% 0% no-repeat padding-box;
    border-radius: 5px;
    border: none;
    color: #ffffff;
    text-align: center;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 18px;
    opacity: 1;
  }
`;

const Caroussel = ({images}) => {
  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(
    slideImage,
    slideText,
    images
  )
  return (
    <div className="slider" ref={slideImage}>
    <div className="slider--content">
      <button onClick={goToPreviousSlide} className="slider__btn-left">
        <i className="fas fa-angle-left"></i>
      </button>
      <div className="slider--feature">
        <h1 className="feature--title">Dreaming</h1>
        <p ref={slideText} className="feature--text"></p>
        <button className="feature__btn">Get started</button>
      </div>
      <button onClick={goToNextSlide} className="slider__btn-right">
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  </div>
    // <Img images={Images}>
    //   <Text>
    //     <p>BUILD ANYTHING WITH US</p>
    //     <h1>We're always ready for a challenge</h1>
    //     <button>Discover More</button>
    //   </Text>
    // </Img>
  );
};

export default Caroussel;
