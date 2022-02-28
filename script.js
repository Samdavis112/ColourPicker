const btn = document.getElementById("btn");
const colour = document.querySelector(".colour");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

    const r = getRandomNumber();
    const g = getRandomNumber();
    const b = getRandomNumber();
    const rgb = `rgb(${r},${g},${b})`;

  document.body.style.backgroundColor = rgb ;
  colour.textContent = rgb;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 255);
}

