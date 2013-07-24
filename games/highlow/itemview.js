goog.provide('plethora.game.HighLow.ItemView');


goog.require('plethora.game.ItemView');
goog.require('goog.math.Size');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.Timer');



plethora.game.HighLow.ItemView = function() {
  goog.base(this);

  this.target = null;

  this.context_ = null;

  this.timer_ = null;

  this.size_ = null;
};
goog.inherits(plethora.game.HighLow.ItemView, plethora.game.ItemView);


plethora.game.HighLow.ItemView.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  this.context_ = this.getElement().getContext('2d');
  this.timer_ = new goog.Timer()
  goog.events.listen(this.timer_, goog.Timer.TICK,
      goog.bind(this.drawFrame, this));

  this.target = Math.floor(Math.random() * 100 + 1);

  this.layout();

  this.timer_.setInterval(60/1000);
  this.timer_.start();
};


plethora.game.HighLow.ItemView.prototype.createDom = function() {
  this.setElementInternal(goog.dom.createElement('canvas'));
};


plethora.game.HighLow.ItemView.prototype.drawFrame = function() {
 // this.context_.clearRect(0, 0, this.size_.width, this.size_.height);

  this.context_.fillStyle = '#00ff00';
//  console.log(this.size_.width);
  this.context_.fillRect(0, 0, this.size_.width, this.size_.height);
};


plethora.game.HighLow.ItemView.prototype.getMaxSize = function() {
  return new goog.math.Size(700, 480);
};


plethora.game.HighLow.ItemView.prototype.setSize = function(size) {
  this.size_ = size;
  goog.style.setSize(this.getElement(), size);
  this.drawFrame();
};
