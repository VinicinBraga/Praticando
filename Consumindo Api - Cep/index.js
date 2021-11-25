"use strict";

const fillForm = (addressParam) => {
  document.getElementById("endereco").value = addressParam.logradouro;
  document.getElementById("bairro").value = addressParam.bairro;
  document.getElementById("cidade").value = addressParam.localidade;
  document.getElementById("estado").value = addressParam.uf;
};

const searchCep = async () => {
  const cep = document.getElementById("cep").value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  /*fetch(url)
    .then((response) => response.json())
    .then(console.log);*/
  const data = await fetch(url);
  const address = await data.json();
  console.log(address);
  if (address.hasOwnProperty("erro")) {
    alert(`O cep ${cep} não foi encontrado`);
  } else {
    fillForm(address);
  }
};

document.getElementById("cep").addEventListener("focusout", searchCep);
