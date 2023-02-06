const buttonIncrement = document.querySelector(
  'button[data-action = "increment"]'
);
const buttonDecrement = document.querySelector(
  'button[data-action = "decrement"]'
);
const result = document.querySelector("#value");
let counterValue = 0;
const onIncrementButtonClick = () => {
  result.textContent = counterValue += 1;
};
const onDecrementButtonClick = () => {
  result.textContent = counterValue -= 1;
};
buttonDecrement.addEventListener("click", onDecrementButtonClick);
buttonIncrement.addEventListener("click", onIncrementButtonClick);
