import React from "react";
import icon from "../images/Icon.svg";
import image from "../images/Image.png";
import styled from "styled-components"; //DELETAR

const Title = styled.div`
  font-family: "Roboto Condensed", sans-serif;

  img {
    width: 18px;
    height: 19px;
    margin-top: 100px;
    justify-content: center;
  }

  p {
    font-size: 16px;
    text-align: center;
    letter-spacing: 3.2px;
    color: #666d81;
    margin-top: 15px;
  }

  h4 {
    text-align: center;
    color: #131d3b;
    font-size: 50px;
    font-weight: bold;
    margin-top: 15px;
  }
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;

  img {
    width: 780px;
    height: 415px;
  }
`;

const Area = styled.div`
  width: 375px;
  height: 415px;
  background: #ff4f01;
  border-radius: 5px;
  margin-left: 35px;
  font-family: "Roboto Condensed", sans-serif;
  text-align: left;

  h3 {
    color: #ffffff;
    font-size: 36px;
    padding: 50px 60px 45px 56px;
    font-weight: normal;
    margin-bottom: 70px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    padding-left: 60px;
  }
`;

const Articles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 300px;
  text-align: left;
  font-family: "Roboto Condensed", sans-serif;
  margin: 20px 366px 20px 395px;

  div {
      padding: 20px;
      width: 376px;
  }

  h3 {
    color: #131d3b;
    font-size: 24px;
    margin-top: 15px;
  }

  p {
    color: #666d81;
    font-size: 17px;
    padding-bottom: 40px;
    margin-top: 25px;
  }

  a {
    text-decoration: none;
    color: #ff4f01;
    font-size: 14px;
    margin-top: 15px;
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
