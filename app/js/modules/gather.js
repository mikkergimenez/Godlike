var slug, text, upfightAction,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

upfightAction = {
  "fight": "Fight",
  "magic": "Magic"
};

for (slug in fightAction) {
  text = fightAction[slug];
  $('#fightSelect').append('<li class="ui-widget-content" id="' + slug + '" data-action="' + slug + '">' + text + '</li>');
}

window.Fight = (function(_super) {
  __extends(Fight, _super);

  function Fight(player, resources, equipment, skills) {
    this.player = player;
    this.resources = resources;
    this.equipment = equipment;
    this.skills = skills;
    this.difficulty = 1;
  }

  Fight.prototype.fightMessage = function(monster) {
    return 'Hit ' + monster.getName() + ' with ' + this.getWords() + ' for ' + this.getDamage() + ' Damage';
  };

  Fight.prototype.getSkill = function() {
    if (!this.equipment.hands.item) {
      if (this.action === 'magic') {
        return this.skills.cantrips;
      } else {
        return this.skills.handToHand;
      }
    }
  };

  Fight.prototype.go = function() {
    if (!this.monster) {
      this.monster = new Monster(this.difficulty);
    }
    this.monster.render();
    this.monster.takeDamage(this.getDamage(), this.monster.level);
    if (this.monster.dead) {
      this.monster.render();
      this.monster = null;
    }
    if (this.monster) {
      this.gainSkill(this.getSkill(), this.monster.level);
      this.player.takeDamage(this.monster.damage, this.monster.level);
      if (this.player.isDead()) {
        this.monster = null;
        this.monster.render();
      }
    }
    if (this.monster) {
      return this.fightMessage(this.monster);
    }
  };

  Fight.prototype.makeEasier = function() {
    if (this.difficulty > 1) {
      return this.difficulty--;
    }
  };

  Fight.prototype.makeHarder = function() {
    if (this.difficulty < 3) {
      return this.difficulty++;
    }
  };

  Fight.prototype.getWords = function() {
    var skill;
    skill = this.getSkill();
    return skill.action;
  };

  Fight.prototype.getLevel = function() {
    var skill;
    skill = this.getSkill();
    return skill.amount;
  };

  Fight.prototype.getAbility = function() {
    var ability, skill;
    skill = this.getSkill();
    ability = abilities[skill.ability];
    return ability.amount;
  };

  Fight.prototype.getDamage = function() {
    return Math.ceil(this.getLevel() + (this.getAbility() / 5)) - this.monster.armor;
  };

  return Fight;

})(Action);
