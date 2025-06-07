  const sound = document.getElementById("ui-sound");

  function playHoverSound() {
    if (sound) {
      sound.pause();
      sound.currentTime = 0;
      sound.playbackRate = 1.8; // velocidade aumentada
      sound.volume = 4.0
      sound.play();
    }
  }

  document.querySelectorAll(".card-hover-sound-ui").forEach(card => {
    card.addEventListener("mouseenter", playHoverSound);
  });
