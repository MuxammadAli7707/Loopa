const fImage = document.getElementById("img");
const sImage = document.getElementById("img-two");

fImage.addEventListener("mousemove", (e) => {
  let a = e.offsetX;
  let b = e.offsetY;
  console.log(a, b);
  sImage.style.transform = `translate(-${a}px, -${b}px) scale(2)`;
});