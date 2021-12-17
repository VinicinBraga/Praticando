const calculate = document.getElementById("calculate");

const BMI = () => {
  const name = document.getElementById("name").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const result = document.getElementById("result");

  if (name !== "" && height !== "" && weight !== "") {
    const BMI = (weight / (height * height)).toFixed(1);

    let bmiResult = "";

    if (BMI < 18.5) {
      bmiResult = "abaixo do peso.";
    } else if (BMI < 25) {
      bmiResult = "com peso ideal. Parabéns!!!";
    } else if (BMI < 30) {
      bmiResult = "levemente acima do peso.";
    } else if (BMI < 35) {
      bmiResult = "com obesidade grau I.";
    } else if (BMI < 40) {
      bmiResult = "com obesidade grau II";
    } else {
      bmiResult = "com obesidade grau III. Cuidado!!";
    }
    result.textContent = `${name} seu IMC é ${BMI} e você está ${bmiResult}`;
  } else {
    result.textContent = "Preencha todos os campos!!!";
  }
};
calculate.addEventListener("click", BMI);
