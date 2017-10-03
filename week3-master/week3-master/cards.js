// Example: "https://www.jeffcohenonline/images/ace_of_spades.png"
// Example: "https://www.jeffcohenonline/images/6_of_hearts.png"

var cardValues = [ 'ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
var cardSuits = ['hearts', 'spades', 'clubs', 'diamonds' ]
var base_url = "images/cards/"

var dealCards = function(event) {
  event.preventDefault();
  var cards_div = document.getElementById('cards');
  var cards_html = "";
  for (var i = 1; i <= 5; ++i) {
    var value = cardValues[Math.floor(Math.random() * cardValues.length)];
    var suit = cardSuits[Math.floor(Math.random() * cardSuits.length)];
    image_url = base_url + value + "_of_" + suit + ".png";
    var image_tag = "<img width=\"200\" src=\"" + image_url + "\">";
    cards_html += image_tag
  }
  cards_div.innerHTML = cards_html;
}

var setupHandler = function() {
  var link = document.getElementById('deal_cards');
  link.addEventListener('click', dealCards);
}

setupHandler();
