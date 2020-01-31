const inputText = document.querySelector("textarea");
const error = document.querySelector(".error-msg");

let counter;
function update(e) {
  counter = e.target.value.length;
  document.querySelector(".num-count").innerText = counter;

  if (counter < 20) {
    error.style.visibility = "hidden";
  } else {
    error.style.visibility = "visible";
  }
}

inputText.addEventListener("keyup", e => {
  update(e);
});

inputText.addEventListener("keydown", e => {
  update(e);
  if (counter === 20 && e.keyCode !== 8) {
    e.preventDefault();
  }
});
