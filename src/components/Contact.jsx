import React from 'react'
import Icon from '../images/IconBlack.svg'
import styled from 'styled-components' //DELETAR

const Area = styled.div `
  width: 945px;
  height: 917px;
  background: #FF4F01;
  font-family: 'Roboto Condensed', sans-serif;
  text-align: left;
  margin-top: -120px;
  border-radius: 0px 5px 5px 0px;

  img {
    margin-top: 120px;
    margin-left: 367px;
  }

  p {
    letter-spacing: 3.2px;
    color: #FFDCCD;
    font-size: 16px;
    margin-left: 367px;
    margin-top: 15px;
  }

  h3 {
    font-size: 50px;
    color: #FFFFFF;
    margin-left: 367px;
    margin-top: 15px;
  }

  form {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    margin-left: 363px;
    margin-top: 60px;
  }

  input {
    height: 78px;
    width: 456px;
    border-radius: 5px;
    border: none;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 16px;
    padding-left: 15px;
  }

  #textarea {
      height: 114px;
      width: 456px;
      padding-left: 15px;
      
  }

  button {
    width: 242px;
    height: 78px;
    background: #131D3B;
    border-radius: 5px;
    color: #FFFFFF;
    margin-top: 25px;
    font-size: 18px;
    font-family: 'Roboto Condensed', sans-serif;
  }
`

const Contact = () => {
    return (
        <Area>
            <img src={Icon}/>
            <p>CONTACT US</p>
            <h3>Request a Quote</h3>
            <form>
                <input placeholder="Your Name"/>
                <input type="email" placeholder="Email Address"/>            {/*/VALIDAR FORM!!!!!} */}
                <input type="tel" placeholder="Phone Number"/>
                <input placeholder="Write Message" id="textarea"/>
                <button>Get a Free Quote</button>
            </form>
        </Area>
    )
}

export default Contact