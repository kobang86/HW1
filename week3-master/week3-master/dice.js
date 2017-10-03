var rollDice = function(event) {
  event.preventDefault();
  var dice_div = document.getElementById('dice');
  var dice_html = "";
  for (var i = 1; i <= 2; ++i) {
    var value = Math.floor(Math.random() * 6) + 1
    var image_tag = "<img width=\"200\" src=\"images/dice/" + value + ".png\">";
    dice_html += image_tag
  }
  dice_div.innerHTML = dice_html;
}

var setupHandler = function() {
  var link = document.getElementById('roll_dice');
  link.addEventListener('click', rollDice);
}

setupHandler();
