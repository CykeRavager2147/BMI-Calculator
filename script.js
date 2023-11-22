const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const result = document.getElementById("result");
const category = document.getElementById("category");
const heightval = document.getElementById("heightval");
const weightval = document.getElementById("weightval");

// Function to calculate the BMI
function calculateBMI() {
  let weight2 = weightInput.value
  let height2 = heightInput.value / 100
  let bmi = weight2 / (height2 * height2)
  result.textContent = bmi.toFixed(1)

  // Determine the BMI category
  if (bmi < 18.5) {
    category.textContent = "Underweight"
  }
  else if (bmi < 25) {
    category.textContent = "Normal weight"
  }
  else if (bmi < 30) {
    category.textContent = "Overweight"
  }
  else {
    category.textContent = "Obese"
  }

//   Edit the Spans
  heightval.textContent = (`${height.value}cm`)
  weightval.textContent = (`${weight.value}kg`)
};

weightInput.addEventListener("input", calculateBMI);
heightInput.addEventListener("input", calculateBMI);