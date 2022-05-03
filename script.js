const yourBirthday = document.querySelector("#birthday");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check");
const outputBox = document.querySelector("#output-box");

alert("we do not collect your data")
function isThisYourLuckyNumber(sum, luckyNumber) {
  if (sum && luckyNumber) {
    if (sum % luckyNumber === 0) {
      outputBox.innerText = `${luckyNumber} is your lucky number`;
    } else {
      outputBox.innerText = `${luckyNumber} is not your Unlucky number. No worries, you make your own luck DATTABAYO.`;
    }
  } else {
    outputBox.innerText = "Please fill both the input";
  }
}

function checkBirthdayIsLucky() {
  const dob = yourBirthday.value; //1999-02-07
  const sum = addBirthdayDigits(dob);
  isThisYourLuckyNumber(sum, luckyNumber.value);
}
function addBirthdayDigits(dob) {
  dob = dob.replaceAll("-", ""); //19990207
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum; //37
}

checkButton.addEventListener("click", checkBirthdayIsLucky);
