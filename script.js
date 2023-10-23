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

for (let j = 0; j < closeBtn.length; j++) {
  closeBtn[j].addEventListener("click", function () {
    closeBtn[j].classList.toggle("close");
    plus[j].classList.toggle("hidden");
    cross[j].classList.toggle("hidden");
    para[j].classList.toggle("hidden");
  });
}
