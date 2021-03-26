// initial counter value
let countValue = 0;

const value = document.getElementById("value");

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const classes = e.currentTarget.classList;
    if (classes.contains("decrease")) {
      countValue--;
    } else if (classes.contains("increase")) {
      countValue++;
    } else countValue = 0;

    countValue > 0
      ? (value.style.color = "green")
      : countValue < 0
      ? (value.style.color = "red")
      : (value.style.color = "#222");

    value.textContent = countValue;
  });
});
