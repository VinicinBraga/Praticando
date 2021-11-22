const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let colorIndex = 0;
let intervalId = null;

const trafficLight = (e) => {
  stopInterval();
  turnON[e.target.id]();
};

const aleatoryChange = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnON[color]();
  nextIndex();
};

nextIndex = () => {
  colorIndex = colorIndex < 2 ? ++colorIndex : 0;
};

stopInterval = () => {
  clearInterval(intervalId);
};

const turnON = {
  red: () => (img.src = "./img/vermelho.png"),
  yellow: () => (img.src = "./img/amarelo.png"),
  green: () => (img.src = "./img/verde.png"),
  automatic: () => (intervalId = setInterval(aleatoryChange, 1000)),
};

buttons.addEventListener("click", trafficLight);
