const countDisplay = document.getElementById("countDisplay");

let countNum = 0;

const minCount = () => {
  countNum -= 1;
  if (countNum < 0) {
    countNum = 0;
  }
  countDisplay.innerHTML = countNum;
  countDisplay.setAttribute("class", "minAnimation");
  setTimeout(() => {
    countDisplay.setAttribute("class", "zeroPost");
  }, 600);
  console.log(countDisplay);
};
const plusCount = () => {
  countNum += 1;
  countDisplay.innerHTML = countNum;
  countDisplay.setAttribute("class", "plusAnimation");
  setTimeout(() => {
    countDisplay.setAttribute("class", "zeroPost");
  }, 600);
  console.log(countDisplay);
};
