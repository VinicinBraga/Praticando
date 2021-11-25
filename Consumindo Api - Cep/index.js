"use strict";

const clearForm = () => {
  document.getElementById("endereco").value = " ";
  document.getElementById("bairro").value = " ";
  document.getElementById("cidade").value = " ";
  document.getElementById("estado").value = " ";
};

const fillForm = (addressParam) => {
  document.getElementById("endereco").value = addressParam.logradouro;
  document.getElementById("bairro").value = addressParam.bairro;
  document.getElementById("cidade").value = addressParam.localidade;
  document.getElementById("estado").value = addressParam.uf;
};
const isNumber = (numb) => /^[0-9]+$/.test(numb);
const cepValidation = (cepParam) => cepParam.length === 8 && isNumber(cepParam);

const searchCep = async () => {
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;

  if (cepValidation(cep)) {
    const data = await fetch(url);
    const address = await data.json();
    console.log(address);
    if (address.hasOwnProperty("erro")) {
      clearForm();
      document.getElementById("endereco").value = `CEP não encontrado`;
    } else {
      fillForm(address);
    }
  } else {
    clearForm();
    document.getElementById("endereco").value = `Formato inválido`;
  }
};

document.getElementById("cep").addEventListener("focusout", searchCep);

/*fetch(url)
    .then((response) => response.json())
    .then(console.log);*/
