goog.require('plethora.game.HighLow.ItemView');


window.onload = function() {
  var g = new plethora.game.HighLow.ItemView();
  g.render(goog.dom.getElement('game-container'));
};
