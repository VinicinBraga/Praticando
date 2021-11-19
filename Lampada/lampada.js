const turnOn = document.getElementById("turn-On");
const turnOff = document.getElementById("turn-Off");
const lamp = document.getElementById("lamp");

function isBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  if (!isBroken()) {
    lamp.src = "./img/ligada.jpg";
  }
}

function lampOff() {
  if (!isBroken()) {
    lamp.src = "./img/desligada.jpg";
  }
}

function brokenLamp() {
  lamp.src = "./img/quebrada.jpg";
  let newDiv = document.createElement("h3");
  newDiv.className = "new-div";
  let newDivContent = document.createTextNode("Por que essa raiva, meu amigo?");
  newDiv.appendChild(newDivContent);
  let lastDiv = document.getElementById("buttons");
  document.body.insertBefore(newDiv, lastDiv);
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", brokenLamp);
