const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let colorIndex = 0;

const trafficLight = (e) => {
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

const turnON = {
  red: () => (img.src = "./img/vermelho.png"),
  yellow: () => (img.src = "./img/amarelo.png"),
  green: () => (img.src = "./img/verde.png"),
  automatic: () => setInterval(aleatoryChange, 1000),
};

buttons.addEventListener("click", trafficLight);
