import React from 'react';

//hook customizado que faz a validação dos campos do formulário da página de contato e também o campo de input da busca de drinks

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

//convençao é o nome do hook começar sempre com "use"
// o hook recebe um tipo de dado para ser validado
const useForm = (type) => {
  //estados para controlar erro e valores recebidos
  const [erro, setErro] = React.useState(null);
  const [value, setValue] = React.useState('');

  function validateInput(value) {
    // função que valida o input recebido e recebe como parâmetro o estado value
    if (value.length === 0) {
      setErro('Fill the input'); //ATEÇÃO TRADUZIR
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      //aqui queremos dizer que há erro e retornar que a validação é falsa (ou seja, não passou) se o tipo passado existe e se o teste da regex falhar, mas como estamos usando um && e para entrar nessa condição ambas testes tem que ser verdadeiro, usamos a negação(!) para a o false do teste da regex ser true
      setErro(types[type].errorMsg);
      return false;
    } else {
      //condição de passar na validação
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
    // hook não retorna elementos HTML pois não é um componente - hook retorna a lógica de programação
    //aqui retornamos os controles do campo, inclsuive as funçoes onde queremos que haja a validação: onBlur e também a própria validateInput
    //por isso podemos no componente contato chamar o componente Input e passar const nome = useForm(name) -> {...nome} como spread, pois essa variavel nome já vai conter todas essas informações/propriedades que vaõ ser passas diretamente para o componente Input
    value,
    setValue,
    erro,
    onChange,
    onBlur: () => validateInput(value),
    validateInput: () => validateInput(value),
  };
};

export default useForm;