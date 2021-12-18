const images = ["img/0.jpg", "img/1.jpg", "img/2.jpg"];

const randomImages = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.src = randomImages;
document.body.appendChild(bgImage);