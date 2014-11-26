'use strict';
var Player, expect, mocha;

mocha = require("mocha");

expect = require("chai").expect;

Player = require("../../app/js/modules/player");

describe('Unit Test Suite', function() {
  it('should have tests', function() {
    return expect(true).to.be["true"];
  });
  it('should start with an HP of ten', function() {
    var name, player;
    name = 'Mik';
    player = new Player(name);
    expect(player.name).to.equal(name);
    expect(player.hp).to.equal(10);
    expect(player.maxhp).to.equal(10);
    return expect(player.action).to.equal('fight');
  });
  it('should be dead if dead', function() {
    var name, player;
    name = 'Mik';
    player = new Player(name);
    return expect(player.isDead()).to.be["false"];
  });
  it('should return the correct action', function() {
    var name, player;
    name = 'Mik';
    player = new Player(name);
    return expect(player.getAction()).to.equal('fight');
  });
  it('should set and return an action', function() {
    var name, player;
    name = 'Mik';
    player = new Player(name);
    player.setAction('build');
    return expect(player.getAction()).to.equal('build');
  });
  it('should rest correctly', function() {
    var name, player, skills;
    name = 'Mik';
    skills = {};
    skills.resting = {};
    skills.resting.amount = 1;
    player = new Player(name, skills);
    player.hp = 5;
    player.maxhp = 10;
    player.rest();
    return expect(player.hp).to.equal(5);
  });
  return it('should have 2 tests', function() {
    return expect(false).to.be["false"];
  });
});
