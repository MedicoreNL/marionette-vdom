'use strict';

require('./outer-html');
var Marionette = require('backbone.marionette');
var VDOMMixin = require('./vdom-mixin');
var VDOMView = Marionette.View.extend(VDOMMixin(Marionette.View.prototype));

module.exports = {
  View: VDOMView
};
