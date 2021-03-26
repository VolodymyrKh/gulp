const colors = ["red", "#cccccc", "blue", "rgb(136, 235, 036)", "#363636"];

const btn = document.getElementById("btn");
const content = document.querySelector(".color");

btn.addEventListener("click", () => {
  let index = randomIndex();

  document.body.style.backgroundColor = colors[index];
  content.textContent = colors[index];
  //   content.style.color = colors[index];
});

function randomIndex() {
  return Math.floor(Math.random() * colors.length);
}
