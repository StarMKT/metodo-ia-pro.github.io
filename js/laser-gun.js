  const sound = document.getElementById("hover-sound");

  function playHoverSound() {
    if (sound) {
      sound.pause();
      sound.currentTime = 0;
      sound.playbackRate = 1.8; // velocidade aumentada
      sound.play();
    }
  }

  document.querySelectorAll(".card-hover-sound").forEach(card => {
    card.addEventListener("mouseenter", playHoverSound);
  });
