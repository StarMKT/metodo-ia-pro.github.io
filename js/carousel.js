 function scrollCarousel(direction) {
    const track = document.getElementById('carouselTrack');
    const card = track.querySelector('.carousel-card');
    const scrollAmount = card.offsetWidth + 24;
    track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
  }