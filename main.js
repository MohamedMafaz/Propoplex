// Selecting the Card
function selectCard(card) {
  // Remove "selected" class from all cards except the clicked one
  let cards = document.querySelectorAll('.card');
  cards.forEach(function(c) {
    if (c !== card && c.classList.contains('selected')) {
      c.classList.remove('selected');
    }
  });

  // Add "selected" class to clicked card
  card.classList.add('selected');
}


// Selecting the Input field
function selectCard(card) {
  // Remove "selected" class from all cards except the clicked one
  let cards = document.querySelectorAll('input');
  cards.forEach(function(c) {
    if (c !== card && c.classList.contains('selected')) {
      c.classList.remove('selected');
    }
  });

  // Add "selected" class to clicked card
  card.classList.add('selected');
}


