const turnOn = document.getElementById("turn-On");
const turnOff = document.getElementById("turn-Off");
const lamp = document.getElementById("lamp");

function isBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampOn() {
  if (!isBroken()) {
    lamp.src = "./img/ligada.jpg";
    document.btn1.style;
  }
}

function lampOff() {
  if (!isBroken()) {
    lamp.src = "./img/desligada.jpg";
  }
}

function brokenLamp() {
  lamp.src = "./img/quebrada.jpg";
}

turnOn.addEventListener("click", lampOn);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", brokenLamp);
