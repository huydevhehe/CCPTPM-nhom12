const images = [
  "https://via.placeholder.com/800x300/ff0000",
  "https://via.placeholder.com/800x300/00ff00",
  "https://via.placeholder.com/800x300/0000ff"
];

let index = 0;
const slider = document.getElementById("slider");

setInterval(() => {
  index = (index + 1) % images.length;
  slider.src = images[index];
}, 2000);
