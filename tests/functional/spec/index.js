'use strict';
var Player, expect;

expect = require("chai").expect;

Player = require("../../../app/js/modules/player");

describe('Functional Test Suite', function() {
  it('Should run tests', function() {
    return expect(true).to.be["true"];
  });
  return it('should read elements on the page', function() {
    return expect($('#testElement')).to.have["class"]('is-active');
  });
});
