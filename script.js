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
  
