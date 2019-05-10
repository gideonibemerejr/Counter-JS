// constants

// state
let runningTotal;

//cached elements
const count = document.getElementById("count"),
  minus = document.getElementById("minus"),
  plus = document.getElementById("plus"),
  input = document.getElementById("input");

//event listeners
plus.addEventListener("click", addValue);
minus.addEventListener("click", subtractValue);

// function calls
initialize();
//functions
function render() {
  if (runningTotal > 0) {
    mountPositive();
    return;
  } else if (runningTotal < 0) {
    mountNegative();
    return;
  } else if (runningTotal === 0) {
    count.style.color = "gold";
    count.textContent = runningTotal;
    return;
  }
}

function initialize() {
  runningTotal = 0;
  input.value = 1;
}

function addValue() {
  runningTotal = runningTotal + parseInt(input.value);
  render();
}
function subtractValue() {
  runningTotal = runningTotal - parseInt(input.value);
  render();
}

function mountPositive() {
  count.style.color = "green";
  count.textContent = runningTotal;
}
function mountNegative() {
  count.style.color = "red";
  count.textContent = runningTotal;
}
