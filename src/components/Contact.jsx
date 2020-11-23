import React from 'react'
import useForm from '../hooks/useForm';
import Icon from '../images/IconBlack.svg'
import styled from 'styled-components' //DELETAR

const Area = styled.div `
  width: 945px;
  height: 925px;
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
  const name = useForm('name');
  const email = useForm('email');
  const phone = useForm('phone');
  const message = useForm('message');
  //const [message, setMessage] = React.useState('');
  //estado que controla o aparecimento de animação de carregamento
  const [loading, setLoading] = React.useState(false);
  const [sentStatus, setSentStatus] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // previne que a página seja recarregada, que é o compartamento padrão(default)
    if (name.validateInput() && email.validateInput() && phone.validateInput() && message.validateInput()) {
      // como name e email são chamadas do hook customizado useForm, eles tem acesso a função de validateInput que é retornada do hook
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        name.setValue('');
        email.setValue('');
        phone.setValue('');
        message.setValue('');
        //setMessage('');
        setSentStatus('Form submitted');  //ATENÇÃO TRADUZIR
        //aqui não há envio real do formulário, então tem uma simulação para que isso apareça pro usuário
        setTimeout(() => setSentStatus(''), 5000);
      }, 2000);
    } else {
      //se a validação falha o formulário não envia
    }
  }
    return (
        <Area>
            <img src={Icon}/>
            <p>CONTACT US</p>
            <h3>Request a Quote</h3>
            <form onSubmit={handleSubmit}>
                <input name="name" required="required" placeholder="Your Name"/>
                <input name="email" type="email" required="required" placeholder="Email Address"/>            {/*/VALIDAR FORM!!!!!} */}
                <input name="phone" type="tel" required="required" placeholder="Phone Number"/>
                <input name="message" required="required" placeholder="Write Message" id="textarea"/>
                <button type="submit">Get a Free Quote</button>
            </form>
        </Area>
    )
}

export default Contact