const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const bgColor = generateColor();
  document.body.style.backgroundColor = bgColor;
  color.textContent = bgColor;
});

function generateColor() {
  let value = "#";
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hex.length);
    value += hex[randomIndex];
  }
  return value;
}
