'use strict';
var Player, View,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

View = require('./view');

Player = (function(_super) {
  __extends(Player, _super);

  Player.prototype.deathMsg = '<span class=\"text-danger\">Dead</span>&nbsp;#{@hp}/#{@maxhp}';

  Player.prototype.equipment = require('./equipment');

  Player.prototype.bindings = {
    '#hp': function() {
      this.maxhp = 10 + Math.pow(Math.floor(this.skills.resistance.amount), 2);
      return '#{@hp}/#{@maxhp}';
      if (this.dead) {
        return this.deathMsg;
      }
    }
  };

  function Player(name, skills) {
    this.name = name;
    this.skills = skills;
    this.hp = 10;
    this.maxhp = 10;
    this.dead = false;
    this.action = 'fight';
    true;
  }

  Player.prototype.getAction = function() {
    return this.action;
  };

  Player.prototype.setAction = function(action) {
    return this.action = action;
  };

  Player.prototype.isDead = function() {
    if (this.dead) {
      return true;
    }
    return false;
  };

  Player.prototype.takeDamage = function(damage, level) {
    console.log('Resistance gaining at level ' + level);
    action.gainSkill(this.skills.resistance, level);
    this.hp = this.hp - damage;
    if (this.hp <= 0) {
      return this.dead = true;
    }
  };

  Player.prototype.tryLife = function() {
    this.rest();
    if (this.hp === this.maxhp) {
      return this.dead = false;
    }
  };

  Player.prototype.rest = function() {
    if (this.hp < this.maxhp) {
      this.hp += Math.ceil(this.skills.resting.amount);
      if (this.hp > this.maxhp) {
        this.hp = this.maxhp;
      }
      action.gainSkill(this.skills.resting, 1);
      return true;
    }
    return false;
  };

  return Player;

})(View);

module.exports = Player;
