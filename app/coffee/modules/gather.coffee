upfightAction = {
    "fight": "Fight"
    "magic": "Magic"
}

for slug, text of fightAction
    $('#fightSelect').append('<li class="ui-widget-content" id="'+slug+'" data-action="'+slug+'">'+text+'</li>')

class window.Fight extends Action

    constructor: (@player, @resources, @equipment, @skills) ->
        @difficulty = 1;

    fightMessage: (monster) ->
        return 'Hit ' + monster.getName() + ' with ' + @getWords() + ' for ' + @getDamage() + ' Damage';

    getSkill: ->
        if not @equipment.hands.item
            if @action == 'magic'
                return @skills.cantrips
            else 
                return @skills.handToHand

    go: ->
        if not @monster
            @monster = new Monster(@difficulty)
        
        @monster.render()
        
        @monster.takeDamage(@getDamage(), @monster.level)

        if @monster.dead
            @monster.render()
            @monster = null

        if @monster
            @gainSkill(@getSkill(), @monster.level)
            @player.takeDamage(@monster.damage, @monster.level)

            if @player.isDead()
                @monster = null
                @monster.render()

        if @monster
            return @fightMessage(@monster)

    makeEasier: ->
        if @difficulty > 1
            @difficulty--

    makeHarder: ->
        if @difficulty < 3
            @difficulty++

    getWords: ->
        skill = @getSkill();
        return skill.action;

    getLevel: ->
        skill = @getSkill()
        return skill.amount

    getAbility: ->
        skill = @getSkill()
        ability = abilities[skill.ability]
        return ability.amount

    getDamage: ->
        return Math.ceil(@getLevel() + (@getAbility() / 5)) - @monster.armor
