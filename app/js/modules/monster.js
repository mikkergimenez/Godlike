var monsters;

monsters = {
  mice: {
    display: 'Mice',
    toHit: 1,
    toHitInc: .1,
    damage: 1,
    damageInc: .1,
    level: 1,
    armor: 0,
    armorInc: .1,
    hp: 5,
    hpInc: 1,
    killed: 0
  },
  rats: {
    display: 'Rats',
    level: 2,
    toHit: 2,
    toHitInc: .3,
    damage: 3,
    damageInc: .3,
    armor: 1,
    armorInc: .3,
    hp: 20,
    hpInc: 2,
    killed: 0
  },
  direRats: {
    display: 'Dire Rats',
    level: 3,
    toHit: 3,
    toHitInc: .5,
    damage: 4,
    damageInc: .5,
    armor: 1,
    armorInc: .5,
    hp: 40,
    hpInc: 4,
    killed: 0
  }
};

window.Monster = (function() {
  Monster.prototype.getMonster = function() {
    switch (this.difficulty) {
      case 1:
        return monsters.mice;
      case 2:
        return monsters.rats;
      case 3:
        return monsters.direRats;
    }
  };

  Monster.prototype.getName = function() {
    return this.display;
  };

  function Monster(difficulty) {
    this.difficulty = difficulty;
    this.monsterInst = this.getMonster();
    this.display = 'Healthy ' + this.monsterInst.display;
    this.level = Math.floor(this.monsterInst.level);
    this.toHit = Math.floor(this.monsterInst.toHit);
    this.damage = Math.floor(this.monsterInst.damage);
    this.armor = Math.floor(this.monsterInst.armor);
    this.hp = Math.floor(this.monsterInst.hp);
    this.maxhp = Math.floor(this.monsterInst.hp);
    this.dead = false;
  }

  Monster.prototype.setHP = function(value) {
    return this.hp = value;
  };

  Monster.prototype.render = function() {
    $('#monster-name').text(this.display);
    $('#monster-level').text(this.level);
    $('#monster-hp').text(this.hp);
    return $('#monster-max-hp').text(this.maxhp);
  };

  Monster.prototype.doDeath = function() {
    this.dead = true;
    this.monsterInst.killed++;
    this.monsterInst.hp += this.monsterInst.hpInc;
    this.monsterInst.damage += this.monsterInst.damageInc;
    this.monsterInst.toHit += this.monsterInst.toHitInc;
    this.monsterInst.armor += this.monsterInst.armorInc;
    return this.monsterInst.level += .01;
  };

  Monster.prototype.takeDamage = function(damage) {
    console.log('Doing ' + damage + ' Damage Leaving ' + this.hp + ' hp.');
    if (this.hp > 0) {
      this.hp -= damage;
      if (this.maxhp * .5 > this.hp) {
        this.display = 'Dying ' + this.monsterInst.display;
      }
      return false;
    } else if (this.hp <= 0) {
      this.setHP(0);
      this.doDeath();
      return true;
    }
    return false;
  };

  return Monster;

})();
