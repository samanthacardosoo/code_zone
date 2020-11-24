import React from 'react';

const types = {
  name: {
    regex: /^[a-zA-Z ]+$/,
    errorMsg: 'Invalid name',
  },
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    errorMsg: 'Invalid email',
  },
  phone: {
    regex: /^[0-9]+$/, 
    errorMsg: 'Invalid number',
  },
  message: {
    regex: /^[a-zA-Z ]+$/,
    errorMsg: 'Write a message',
  },
};

const useForm = (type) => {
  const [erro, setErro] = React.useState(null);
  const [value, setValue] = React.useState('');

  function validateInput(value) {
    if (value.length === 0) {
      setErro('Fill the input');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setErro(types[type].errorMsg);
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  //controla o onChange que vai iterar fazendo a validação a cada mudança no input - oferece boa experiência de usuário
  function onChange({ target }) {
    //desestruturado o event.target
    if (erro) {
      //se erro === true (omitido aqui) faz novamente a validação com o dado novo inserido no onChange
      validateInput(target.value);
    }
    //se não há erro, altera estado para receber o valor do campo
    setValue(target.value);
  }
  return {
    value,
    setValue,
    erro,
    onChange,
    onBlur: () => validateInput(value),
    validateInput: () => validateInput(value),
  };
};

export default useForm;