var Ability, City, Godlike, Message, Resource, city, godlike,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Message = (function() {
  function Message() {}

  Message.prototype.action = function(message) {
    return $('#actionText').html(message);
  };

  return Message;

})();

window.message = new Message();

City = (function() {
  function City(name) {
    this.name = name;
    true;
  }

  return City;

})();

city = new City('Ascert');

Ability = (function(_super) {
  __extends(Ability, _super);

  function Ability() {
    return Ability.__super__.constructor.apply(this, arguments);
  }

  return Ability;

})(Stat);

Resource = (function(_super) {
  __extends(Resource, _super);

  function Resource() {
    return Resource.__super__.constructor.apply(this, arguments);
  }

  return Resource;

})(Stat);

window.abilities = [];

abilities.strength = new Ability('Strength', 'strength', 1);

abilities.intelligence = new Ability('Intelligence', 'intelligence', 1);

abilities.wisdom = new Ability('Wisdom', 'wisdom', 1);

abilities.dexterity = new Ability('Dexterity', 'dexterity', 1);

abilities.constitution = new Ability('Constitution', 'constitution', 1);

abilities.charisma = new Ability('Charisma', 'charisma', 1);

abilities.mana = new Ability('Mana', 'mana', 1);

abilities.intuition = new Ability('Intuition', 'intuition', 1);

window.resources = [];

resources.gold = new Resource('Gold', 'gold', 0);

resources.stone = new Resource('Stone', 'stone', 0);

resources.wood = new Resource('Wood', 'wood', 0);

resources.brick = new Resource('Brick', 'brick', 0);

Godlike = (function() {
  function Godlike() {
    this.time = new Time();
    this.action = new Action(resources);
    this.player = new Player('Mikbeth', window.skills);
    this.fight = new Fight(this.player, resources, equipment, window.skills);
    this.gather = new Gather(resources, window.skills);
    this.build = new Build(resources);
  }

  Godlike.prototype.save = function() {
    $.jStorage.set("saved", true);
    $.jStorage.set("namesKey", names);
    $.jStorage.set("resourcesKey", resources);
    $.jStorage.set("infrastructureKey", infrastructure);
    return $('#showSave').fadeIn(1000).delay(1000).fadeOut(1000);
  };

  Godlike.prototype.load = function() {
    var credit, gold, infrastructure, names;
    if ($.jStorage.get("saved")) {
      names = $.jStorage.get("namesKey");
      gold = $.jStorage.get("goldKey");
      credit = $.jStorage.get("creditKey");
      infrastructure = $.jStorage.get("infrastructureKey");
      return 1;
    } else {
      return 0;
    }
  };

  Godlike.prototype.start = function() {
    "BeginTick handles the tick every second, as well as saving\nevery 60 seconds\n\nsaveCounter is reset every 60 seconds\n";
    var saveCounter;
    saveCounter = 0;
    return setInterval((function(_this) {
      return function() {
        _this.tick();
        if (saveCounter >= 60) {
          saveCounter = 0;
          return $('#showSave').fadeIn(1000).delay(1000).fadeOut(1000);
        } else {
          return saveCounter++;
        }
      };
    })(this), 1000);
  };

  Godlike.prototype.tick = function() {
    this.player.render();
    this.time.increment();
    this.time.render();
    if (this.player.dead) {
      return this.player.tryLife();
    } else {
      if (this.time.afterHours()) {
        message.action('Resting');
        this.player.rest();
      } else {
        switch (this.player.getAction()) {
          case 'fight':
            message.action(this.fight.go());
            break;
          case 'gather':
            message.action(this.gather.go());
            break;
          case 'build':
            message.action(this.build.go());
        }
      }
      return this.update_values();
    }
  };

  Godlike.prototype.put_in_place = function(id, object) {
    var appendID;
    if ($('#' + id).find('#' + object.slug + 'Amount').length > 0) {
      return 1;
    } else {
      if (id === 'abilities') {
        return $('#' + id).append('<tr><td href="#skills-' + object.slug + '" data-toggle="tab">' + object.display + ':</td><td class="pull-right" id="' + object.slug + 'Amount">' + object.amount + '</td></tr>');
      } else if (id === 'skills') {
        appendID = '#' + id + '-' + object.ability;
        if ($(appendID).find('#' + object.slug + 'Amount').length > 0) {
          return 1;
        } else {

        }
        return $(appendID).append('<tr><td>' + object.display + ':</td><td class="pull-right" id="' + object.slug + 'Amount">' + object.amount + '</td></tr>');
      } else {
        return $('#' + id).append('<tr><td>' + object.display + ':</td><td class="pull-right" id="' + object.slug + 'Amount">' + object.amount + '</td></tr>');
      }
    }
  };

  Godlike.prototype.update_values = function() {
    var key, value, _ref, _results;
    for (key in abilities) {
      value = abilities[key];
      this.put_in_place('abilities', value);
      $('#' + value.slug + "Amount").html(value.amount.toFixed(0));
    }
    for (key in resources) {
      value = resources[key];
      this.put_in_place('resources', value);
      $('#' + value.slug + "Amount").html(value.amount.toFixed(0));
    }
    for (key in infrastructure) {
      value = infrastructure[key];
      this.put_in_place('infrastructure', value);
      $('#' + value.slug + "Amount").html(value.amount.toFixed(0));
    }
    _ref = window.skills;
    _results = [];
    for (key in _ref) {
      value = _ref[key];
      this.put_in_place('skills', value);
      _results.push($('#' + value.slug + "Amount").html(value.amount.toFixed(0)));
    }
    return _results;
  };

  return Godlike;

})();

godlike = new Godlike();

"The Procedure Main: This is where everything starts";

$(document).ready(function() {
  $('#fightEasier').click(function() {
    return godlike.fight.makeEasier();
  });
  return $('#fightHarder').click(function() {
    return godlike.fight.makeHarder();
  });
});

godlike.load();

godlike.start();

godlike.update_values();
