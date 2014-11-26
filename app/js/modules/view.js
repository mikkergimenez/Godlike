'use strict';
var View;

View = (function() {
  function View() {}

  View.prototype.render = function() {
    var k, v, _ref, _results;
    if (this.bindings != null) {
      _ref = this.bindings;
      _results = [];
      for (k in _ref) {
        v = _ref[k];
        if (jQuery.isFunction(this[v])) {
          _results.push($(k).html(this[v]()));
        } else {
          _results.push($(k).html(this[v]));
        }
      }
      return _results;
    }
  };

  return View;

})();

module.exports = View;
