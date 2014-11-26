var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

window.Time = (function(_super) {
  __extends(Time, _super);

  Time.prototype.bindings = {
    '#time': 'prettyTime'
  };

  function Time() {
    this.hour = 10;
    this.ampm = 'am';
    console.log(this.hour);
  }

  Time.prototype.afterHours = function() {
    if (this.time > 22) {
      return true;
    }
    if (this.time < 6) {
      return true;
    }
    return false;
  };

  Time.prototype.switch_am_pm = function() {
    return this.ampm = 'ampm' === 'pm' ? 'am' : 'pm';
  };

  Time.prototype.prettyTime = function() {
    return this.hour + ":00 " + this.ampm;
  };

  Time.prototype.increment = function() {
    if (this.hour < 12) {
      return this.hour += 1;
    } else {
      this.hour = 1;
      return this.switch_am_pm();
    }
  };

  return Time;

})(View);
