let first = document.querySelector("#specifica");
let second = document.querySelector("#specificb");
let third = document.querySelector("#specificc");

first.addEventListener("click", () => {
  first.style.borderBottom = "3px solid   white";

  second.style.borderBottom = "";
  third.style.borderBottom = "";
});

second.addEventListener("click", () => {
  second.style.borderBottom = "3px solid  white";

  first.style.borderBottom = "";
  third.style.borderBottom = "";
});

third.addEventListener("click", () => {
  third.style.borderBottom = "3px solid white";

  first.style.borderBottom = "";
  second.style.borderBottom = "";
});