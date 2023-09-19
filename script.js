// no loger part of design 
// Animate Icons effect help from w3schools 
// function chargebattery() {
//   var a;
//   a = document.getElementById("battery");
//   a.innerHTML = "&#xf244;";
//   setTimeout(function () {
//       a.innerHTML = "&#xf243;";
//     }, 1000);
//   setTimeout(function () {
//       a.innerHTML = "&#xf242;";
//     }, 2000);
//   setTimeout(function () {
//       a.innerHTML = "&#xf241;";
//     }, 3000);
//   setTimeout(function () {
//       a.innerHTML = "&#xf240;";
//     }, 4000);
// }
// chargebattery();
// setInterval(chargebattery, 5000);

// script.js
// script.js
document.addEventListener("DOMContentLoaded", function () {
    var playButton = document.getElementById("playButton");
    var music = document.getElementById("music");
  
    playButton.addEventListener("click", function () {
      if (music.paused) {
        music.play();
        playButton.textContent = "Pause Music";
      } else {
        music.pause();
        playButton.textContent = "Play Music";
      }
    });
  });
  