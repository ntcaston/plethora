goog.provide('plethora.model.ItemView');

goog.require('goog.dom');
goog.require('goog.ui.Component');
goog.require('goog.dom.ViewportSizeMonitor');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.style');



plethora.model.ItemView = function() {
  this.parentEl_ = null;
  this.backgroundEl_ = null;

  this.availSize = null;
  this.topLeft = null;
};
goog.inherits(plethora.model.ItemView, goog.ui.Component);


plethora.model.ItemView.prototype.enterDocument = function() {
  goog.base(this, 'enterDocument');

  var vsm = new goog.dom.ViewportSizeMonitor();
  goog.events.listen(vsm, goog.events.EventType.RESIZE,
      goog.bind(this.layout, this));

  this.parentEl_ = goog.dom.getElement('game-container');
  this.backgroundEl_ = goog.dom.getElement('background');
};


plethora.model.ItemView.prototype.layout = function() {
  this.topLeft = goog.style.getPosition(this.backgroundEl_);
  this.availSize = goog.style.getSize(this.backgroundEl_);
  
  var useSize = this.getMaxSize();
  var wToH = useSize.width / useSize.height;

  if (this.availSize.width < useSize.width) {
    useSize.width = this.availSize.width;
    useSize.height = useSize.width / wToH;
  }
  if (this.availSize.height < useSize.height) {
    useSize.height = this.availSize.height;
    useSize.width = useSize.height * wToH;
  }
  goog.style.setSize(this.parentEl_, useSize);
  this.setSize(useSize);

  var left = (this.availSize.width - useSize.width) / 2;
  var top = (this.availSize.height - useSize.height) / 2;
  goog.style.setPosition(this.parentEl_, left, top);
};


plethora.model.ItemView.prototype.getMaxSize = goog.abstractMethod;
