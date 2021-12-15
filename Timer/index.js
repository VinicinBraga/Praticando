let sec = 0;
let min = 0;
let hour = 0;
let setSec = 0;

const twoDigits = (digit) => {
  if (digit < 10) {
    return `0${digit}`;
  } else {
    return digit;
  }
};

const startWatch = () => {
  clearWatch();
  setSec = setInterval(timer, 1000);
};

const stopWatch = () => {
  clearInterval(setSec);
};

const clearWatch = () => {
  clearInterval(setSec);
  sec = 0;
  min = 0;
  document.getElementById("stopwatch").innerText = "00:00:00";
};

const timer = () => {
  if (sec === 60) {
    min++;
    sec = 0;
    if (min === 60) {
      hour++;
      min = 0;
      sec = 0;
    }
  }
  sec++;
  document.getElementById("stopwatch").innerText = `${twoDigits(
    hour
  )}:${twoDigits(min)}:${twoDigits(sec)}`;
};
