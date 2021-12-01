document.getElementById("name").value = localStorage.name;
document.getElementById("surname").value = localStorage.surname;
document.getElementById("email").value = localStorage.email;
document.getElementById("cell").value = localStorage.cell;
document.getElementById("city").value = localStorage.city;
document.getElementById("birth").value = localStorage.birth;
document.getElementById("state").value = localStorage.state;

const saveData = () => {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const cell = document.getElementById("cell").value;
  const birth = document.getElementById("birth").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const obj = { name, surname, email, cell, birth, city, state };

  localStorage.setItem("name", obj.name);
  localStorage.setItem("surname", obj.surname);
  localStorage.setItem("email", obj.email);
  localStorage.setItem("cell", obj.cell);
  localStorage.setItem("birth", obj.birth);
  localStorage.setItem("city", obj.city);
  localStorage.setItem("state", obj.state);
};
