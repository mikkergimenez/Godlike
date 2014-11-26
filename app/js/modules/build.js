var build, slug, text,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

build = {
  "brick": "Brick",
  "plank": "Plank",
  "slug": "Text"
};

for (slug in build) {
  text = build[slug];
  $('#buildSelect').append('<li class="ui-widget-content" id="' + slug + '" data-action="' + slug + '">' + text + '</li>');
}

window.infrastructure = {
  homes: {
    display: 'Homes',
    slug: 'homes',
    amount: 0
  },
  followers: {
    display: 'Followers',
    slug: 'followers',
    amount: 0
  }
};

window.Build = (function(_super) {
  __extends(Build, _super);

  function Build() {
    return Build.__super__.constructor.apply(this, arguments);
  }

  Build.prototype.getBuildingSkill = function() {
    return skills.brickmaking;
  };

  Build.prototype.go = function() {
    console.log("Going Build");
    if (this.resources.stone.amount > 0) {
      this.resources.stone.amount = this.resources.stone.amount - .1;
      this.resources.brick.amount = this.resources.brick.amount + .1;
    } else {
      $("#selectAction #gather").click();
    }
    return "Making Brick.";
  };

  return Build;

})(Action);
