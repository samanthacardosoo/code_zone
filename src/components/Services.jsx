import React from "react";
import icon from "../images/Icon.svg";
import image from "../images/Image.png";
import styled from "styled-components";

const Title = styled.div`

  img {
    max-width: 18px;
    max-height: 19px;
    margin-top: 7%;
    justify-content: center;
  }

  p {
    font-size: 16px;
    text-align: center;
    letter-spacing: 3.2px;
    color: #666d81;
    margin-top: 1%;
  }

  h4 {
    font-size: 50px;
    font-weight: bold;  
    color: #131d3b;
    text-align: center;
    margin-top: 1%;
  }

  @media (max-width:1024px) {

}

@media (max-width:768px) {

  p {
    font-size: 14px;
  }

  h4 {
    font-size: 40px;
  }
}

@media (max-width:480px) {
    
}
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5%;

  img {
    max-width: 50%;
    //max-height: 415px;
  }

  @media (max-width:1024px) {

}

@media (max-width:768px) {
    display: grid;
    grid-template-rows: repeat(2fr);
    
    img {
     max-width: 100%
    }
}

@media (max-width:480px) {
    max-width: 480px;
    max-height: auto;
}
`;

const Area = styled.div`
  max-width: 30%;
  //max-height: 415px;
  background: #ff4f01;
  border-radius: 5px;
  margin-left: 3%;
  text-align: left;

  h3 {
    color: #ffffff;
    font-size: 36px;
    font-weight: normal;
    padding: 10% 15%;
    margin-bottom: 10%;
  }

  a {
    color: #ffffff;
    font-size: 14px;
    padding-left: 15%;
  }

  @media (max-width:1024px) {

}

@media (max-width:768px) {
    max-width: 100%;
    height: 280px;
    margin-left: 0;

    h3 {
        text-align: center;
        margin-bottom: 0;
    }
    
}

@media (max-width:480px) {
    
}
`;

const Articles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: left;
  margin: 1% 8%;

  div {
      padding: 3%;
  }

  h3 {
    color: #131d3b;
    font-size: 24px;
    margin-top: 3%;
  }

  p {
    color: #666d81;
    font-size: 17px;
    padding-bottom: 10%;
    margin-top: 8%;
  }

  a {
    color: #ff4f01;
    font-size: 14px;
  }

  @media (max-width:1024px) {

}

@media (max-width:768px) {
    display: grid;
  grid-template-columns: revert;
  margin: 1% 5%;

  div {
      padding: 0;
  }
  
  p {
    padding-bottom: 2%;
    margin-top: 5%;
  }
    
}

@media (max-width:480px) {
    
}
`;

const Services = () => {
  return (
    <div>
      <Title>
        <img src={icon} />
        <p>OUR SERVICES</p>
        <h4>Industries Served</h4>
      </Title>
      <Images>
        <img src={image} />
        <Area>
          <h3>We are a leading industry & factory company in new york</h3>
          <a href="#">READ MORE</a>
        </Area>
      </Images>
      <Articles>
        <div>
          <h3>Industrial maintenance solutions</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit vehicula est
            eget felis vehicula imperdiet non lacus at quam gravida porta usce
            viverra consectetur turpis id lacinia dolor sit amet.
          </p>
          <a href="#">READ MORE</a>
        </div>
        <div>
          <h3>Embrace new technologies</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit vehicula est
            eget felis vehicula imperdiet non lacus at quam gravida porta usce
            viverra consectetur turpis id lacinia dolor sit amet.
          </p>
          <a href="#">READ MORE</a>
        </div>
        <div>
          <h3>Large-scale production for business</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit vehicula est
            eget felis vehicula imperdiet non lacus at quam gravida porta usce
            viverra consectetur turpis id lacinia dolor sit amet.
          </p>
          <a href="#">READ MORE</a>
        </div>
      </Articles>
    </div>
  );
};

export default Services;
