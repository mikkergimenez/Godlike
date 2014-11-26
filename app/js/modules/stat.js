var Stat,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Stat = (function(_super) {
  __extends(Stat, _super);

  function Stat(display, slug, amount) {
    this.display = display;
    this.slug = slug;
    this.amount = amount != null ? amount : 0;
  }

  Stat.prototype.add = function(num) {
    if (num) {
      return this.amount += num;
    } else {
      return this.amount++;
    }
  };

  Stat.prototype.sub = function(num) {
    if (num) {
      return this.amount -= num;
    } else {
      return this.amount--;
    }
  };

  return Stat;

})(View);
