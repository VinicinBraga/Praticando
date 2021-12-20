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
      bmiResult = "under weight.";
    } else if (BMI < 25) {
      bmiResult = "with ideal weight. Congratulations!!!";
    } else if (BMI < 30) {
      bmiResult = "slightly overweight.";
    } else if (BMI < 35) {
      bmiResult = "with grade I obesity.";
    } else if (BMI < 40) {
      bmiResult = "with grade II obesity.";
    } else {
      bmiResult = "with grade III obesity. Be careful!!";
    }
    result.textContent = `${name}, your BMI is ${BMI} and you are ${bmiResult}`;
  } else {
    result.textContent = "Fill in all fields!!!";
  }
};
calculate.addEventListener("click", BMI);
