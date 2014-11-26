var $, godlike, stop, upgrades,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

$ = require('jquery');

godlike = require('./godlike');

upgrades = require('./upgrades');

$("#selectAction").selectable({
  stop: function() {
    var result;
    result = $("#select-result").empty();
    $(".ui-selected", this).each(function() {
      var index;
      index = $("#selectAction li").index(this);
      godlike.player.setAction($(this).data('action'));
      $('#selectAction li[href="#' + godlike.player.getAction() + 'Actions"]').tab('show');
      return result.append(" #" + (index + 1));
    });
    return true;
  }
});

$("#fightSelect").selectable({
  stop: function() {
    var result;
    result = $("#select-result").empty();
    return $(".ui-selected", this).each(function() {
      var index;
      index = $("#selectAction li").index(this);
      godlike.fight.setAction($(this).data('action'));
      return result.append(" #" + (index + 1));
    });
  }
});

$("#buildSelect").selectable({
  stop: function() {
    var result;
    godlike.build.setAction($(this).data('action'));
    result = $("#select-result").empty();
    return $(".ui-selected", this).each(function() {
      var index;
      index = $("#selectAction li").index(this);
      return result.append(" #" + (index + 1));
    });
  }
});

$("#gatherSelect").selectable(stop = function() {
  var result;
  godlike.gather.setAction($(this).data('action'));
  result = $("#select-result").empty();
  return $(".ui-selected", this).each(function() {
    var index;
    index = $("#selectAction li").index(this);
    return result.append(" #" + (index + 1));
  });
});

$('.doUpgrade').click(function() {
  var upgradeName;
  upgradeName = $(this).data('upgrade-name');
  if (!upgrades[upgradeName].purchased) {
    if (gold.amount >= upgrades[upgradeName].cost.gold) {
      removeCash(upgrades[upgradeName].cost.gold);
      upgrades[upgradeName].effect();
      upgrades[upgradeName].purchased = true;
      $(upgrades[upgradeName]["class"]).addClass('hidden');
      $(upgrades[upgradeName].dependedOn).removeClass('hidden');
      $("#upgrades").prepend(upgrades[upgradeName].message).fadeIn('slow');
      return godlike.update_values();
    } else {
      return $("#info").fadeIn(1000).html('<span>You need more gold.</span>').fadeOut(3000);
    }
  }
});

$('#modalClose').click(function() {
  names.city = document.getElementById('city').value;
  document.getElementById("cityName").innerHTML = names.city;
  names.player = document.getElementById('player').value;
  return document.getElementById("playerName").innerHTML = names.player;
});

$('#save').click(function() {
  return save();
});

window.Action = (function(_super) {
  __extends(Action, _super);

  function Action(resources) {
    this.resources = resources;
  }

  Action.prototype.setAction = function(action) {
    return this.action = action;
  };

  Action.prototype.getAction = function() {
    return this.action;
  };

  Action.prototype.gainSkill = function(skill, level) {
    var difference, modifier, multiple, overninety, power;
    modifier = 0;
    if (skill.amount < 90) {
      power = 1 + (skill.amount / 10);
      modifier = Math.pow(.1, power);
    } else {
      overninety = skill.amounlt - 90;
      multiple = 9 + overninety;
      modifier = Math.pow(.1, multiple);
    }
    difference = Math.floor(skill.amount) - Math.floor(level);
    if (Math.floor(skill.amount) > Math.floor(level)) {
      modifier = Math.pow(modifier, difference);
    }
    if (Math.floor(skill.amount) < Math.floor(level)) {
      modifier = modifier * Math.abs(difference);
    }
    skill.amount = skill.amount + modifier;
    return abilities[skill.ability].amount = abilities[skill.ability].amount + modifier / 10;
  };

  return Action;

})(View);
