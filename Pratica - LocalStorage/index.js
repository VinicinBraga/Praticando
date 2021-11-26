document.getElementById("estado").value = localStorage.estado;
document.getElementById("dataInicio").value = localStorage.inicio;
document.getElementById("dataFinal").value = localStorage.final;

const saveData = () => {
  const state = document.getElementById("estado").value;
  const initialDate = document.getElementById("dataInicio").value;
  const finalDate = document.getElementById("dataFinal").value;
  const obj = {
    state,
    initialDate,
    finalDate,
  };
  localStorage.setItem("estado", obj.state);
  localStorage.setItem("inicio", obj.initialDate);
  localStorage.setItem("final", obj.finalDate);
};
