// Selecting the Card
function selectCard(button) {
  let card = button.parentNode;
  // Remove "selected" class from all cards except the clicked one and change button text to "USE NOW"
  let cards = document.querySelectorAll(".card");
  cards.forEach(function (c) {
    if (c !== card && c.classList.contains("selected")) {
      c.classList.remove("selected");
      //gets the last children of the card (the button) and change the text
      c.children.item(c.children.length - 1).innerHTML = "USE NOW";
    }
  });

  // Add "selected" class to clicked card
  card.classList.add("selected");

  // change button text to Selected
  button.innerHTML = "Selected";
}


//note I removed this function and added the focus selector to the input in the css

// Selecting the Input field
// function selectCard(card) {
//   // Remove "selected" class from all cards except the clicked one
//   let cards = document.querySelectorAll('input');
//   cards.forEach(function(c) {
//     if (c !== card && c.classList.contains('selected')) {
//       c.classList.remove('selected');
//     }
//   });

//   // Add "selected" class to clicked card
//   card.classList.add('selected');
// }
