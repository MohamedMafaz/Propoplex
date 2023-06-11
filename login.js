function rotateTestimonials() {
    const cards = document.getElementsByClassName('testimonial-card');
    const activeCard = document.querySelector('.testimonial-card.active');
    const activeIndex = Array.from(cards).indexOf(activeCard);
    const nextIndex = (activeIndex + 1) % cards.length;
  
    activeCard.classList.remove('active');
    cards[nextIndex].classList.add('active');
  }
  
  setInterval(rotateTestimonials, 5000);
  