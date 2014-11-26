var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

window.Skill = (function(_super) {
  __extends(Skill, _super);

  function Skill(display, slug, action, ability) {
    this.display = display;
    this.slug = slug;
    this.action = action;
    this.ability = ability;
    this.amount = 0;
  }

  return Skill;

})(Stat);

window.skills = [];

window.skills.handToHand = new Skill('Hand to Hand', 'hand-to-hand', 'your bare hands', 'strength');

window.skills.mining = new Skill('Mining', 'mining', 'you mine for', 'strength');

window.skills.woodcutting = new Skill('Woodcutting', 'woodcutting', 'you chop', 'strength');

window.skills.brickmaking = new Skill('Brickmaking', 'brickmaking', 'you make', 'strength');

window.skills.weapons = new Skill('Weapons', 'weapons', 'you forge', 'strength');

window.skills.cantrips = new Skill('Cantrips', 'cantrips', 'a spark from your finger', 'intelligence');

window.skills.resting = new Skill('Resting', 'resting', 'ability to heal HP with rest', 'constitution');

window.skills.resistance = new Skill('Resistance', 'resistance', 'Ability to take damange.', 'constitution');
