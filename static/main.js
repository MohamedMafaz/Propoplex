// Summa
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

// Code for the form needs to be same as selected card
function selectCard(button) {
  var value = button.value;
  var formA = document.getElementById("upwork");
  var formB = document.getElementById("fiverr");
  var formC = document.getElementById("resume");

  if (value === "1") {
    formA.classList.remove("form");
    formB.classList.add("form");
    formC.classList.add("form");
  } else if (value === "2") {
    formA.classList.add("form");
    formB.classList.remove("form");
    formC.classList.add("form");
  } else if (value === "3") {
    formA.classList.add("form");
    formB.classList.add("form");
    formC.classList.remove("form");
  }
}

// Copy text button
window.addEventListener('DOMContentLoaded', function() {
  var copyButton = document.getElementById('copyButton');
  var proposalText = document.getElementById('proposalText');

  copyButton.addEventListener('click', function() {
      proposalText.select();
      document.execCommand('copy');
      alert('Proposal text copied to clipboard!');
  });
});

