const openBtn = document.querySelectorAll(".open");
const closeBtn = document.querySelectorAll(".close");
const plus = document.querySelectorAll(".plus");
const cross = document.querySelectorAll(".cross");
const para = document.querySelectorAll(".para");

for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener("click", function () {
    openBtn[i].classList.toggle("close");
    plus[i].classList.toggle("hidden");
    cross[i].classList.toggle("hidden");
    para[i].classList.toggle("hidden");
  });
}

