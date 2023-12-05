let maxNumber;
let userNumber;

function generateRandomNumber() {
  maxNumber = parseInt(document.getElementById("maxNumber").value);
  userNumber = parseInt(document.getElementById("userGuess").value);

  if (isNaN(maxNumber) || maxNumber <= 0) {
    alert("양수를 입력하세요.");
    return;
  }

  if (isNaN(userNumber) || userNumber <= 0 || userNumber > maxNumber) {
    alert("올바른 숫자를 입력하세요.");
    return;
  }

  const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

  const userMessage = `You chose: ${userNumber} ,`;
  const machineMessage = `The machine chose: ${randomNumber}`;

  const randomNumberElement = document.getElementById("randomNumber");
  randomNumberElement.textContent = userMessage + machineMessage;
  randomNumberElement.classList.remove("hidden");

  const resultElement = document.getElementById("result");

  if (userNumber === randomNumber) {
    resultElement.textContent = "You won!";
  } else {
    resultElement.textContent = "You lost!";
  }

  resultElement.classList.remove("hidden");
}
