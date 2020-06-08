console.log("Alena Zachová");

const button = document.getElementById("butt");

console.log(button);
button.addEventListener("click", () => {
  console.log("Klik");
  const fotogalerie = document.querySelector(".fotky");
  console.log(fotogalerie);
  fotogalerie.classList.remove("pruhledne");
  button.style.display = "none";
})