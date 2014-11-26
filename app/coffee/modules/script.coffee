# Variables

class Message
    action: (message) ->
        $('#actionText').html(message)

window.message = new Message()

class City
    constructor: (@name) ->
        true

city = new City 'Ascert'

class Ability extends Stat

class Resource extends Stat


window.abilities = []

abilities.strength      = new Ability 'Strength',       'strength',     1
abilities.intelligence  = new Ability 'Intelligence',   'intelligence', 1
abilities.wisdom        = new Ability 'Wisdom',         'wisdom',       1
abilities.dexterity     = new Ability 'Dexterity',      'dexterity',    1
abilities.constitution  = new Ability 'Constitution',   'constitution', 1
abilities.charisma      = new Ability 'Charisma',       'charisma',     1
abilities.mana          = new Ability 'Mana',           'mana',         1
abilities.intuition     = new Ability 'Intuition',      'intuition',    1


window.resources = []

resources.gold  = new Resource 'Gold',  'gold',     0
resources.stone = new Resource 'Stone', 'stone',    0
resources.wood  = new Resource 'Wood',  'wood',     0
resources.brick = new Resource 'Brick', 'brick',    0

class Godlike

    constructor: () ->
        @time = new Time()
        @action = new Action(resources)
        @player  = new Player 'Mikbeth', window.skills
        @fight   = new Fight @player, resources, equipment, window.skills
        @gather  = new Gather resources, window.skills
        @build   = new Build resources

    save: () ->
        $.jStorage.set("saved", true);
        $.jStorage.set("namesKey", names);
        $.jStorage.set("resourcesKey", resources);
        $.jStorage.set("infrastructureKey", infrastructure);
        $('#showSave').fadeIn(1000).delay(1000).fadeOut(1000)


    load: () ->
        if ($.jStorage.get("saved"))
            names               = $.jStorage.get("namesKey");
            gold                = $.jStorage.get("goldKey");
            credit              = $.jStorage.get("creditKey");
            infrastructure      = $.jStorage.get("infrastructureKey");
            return 1;
        else
            return 0;

    start: () ->
        """
        BeginTick handles the tick every second, as well as saving
        every 60 seconds

        saveCounter is reset every 60 seconds

        """
        # Gets the save coutner ready to save every 60 seconds
        saveCounter = 0; 

        setInterval =>
            
            @tick();

            if saveCounter >= 60
                #save()
                saveCounter = 0
                $('#showSave').fadeIn(1000).delay(1000).fadeOut(1000)
            else
                saveCounter++

        , 1000


    tick: () ->
        # Update the player values
        @player.render()
        
        # Render the current time of day
        @time.increment()
        @time.render()

        if @player.dead
            @player.tryLife()
        else
            if @time.afterHours()
                message.action('Resting')
                @player.rest()
            else
                switch @player.getAction()
                    when 'fight'    then message.action(@fight.go())
                    when 'gather'   then message.action(@gather.go())
                    when 'build'    then message.action(@build.go())
            @update_values()

    put_in_place: (id, object) ->
        if $('#' + id).find('#' + object.slug + 'Amount').length > 0
            return 1;
        else
            if id is 'abilities'
                $('#' + id).append('<tr><td href="#skills-' + object.slug + '" data-toggle="tab">' + object.display + ':</td><td class="pull-right" id="' + object.slug + 'Amount">' + object.amount + '</td></tr>');
            else if id is 'skills'
                appendID = '#' + id + '-' + object.ability
                if $(appendID).find('#' + object.slug + 'Amount').length > 0
                    return 1
                else
                $(appendID).append('<tr><td>' + object.display + ':</td><td class="pull-right" id="' + object.slug + 'Amount">' + object.amount + '</td></tr>');        
            else    
                $('#' + id).append('<tr><td>' + object.display + ':</td><td class="pull-right" id="' + object.slug + 'Amount">' + object.amount + '</td></tr>');


    # Display the correct values.
    update_values: () ->
        for key, value of abilities
            @put_in_place('abilities', value)
            $('#' + value.slug + "Amount").html(value.amount.toFixed(0));

        for key, value of resources
            @put_in_place('resources', value)
            $('#' + value.slug + "Amount").html(value.amount.toFixed(0));

        for key, value of infrastructure
            @put_in_place('infrastructure', value)
            $('#' + value.slug + "Amount").html(value.amount.toFixed(0));

        for key, value of window.skills
            @put_in_place('skills', value)
            $('#' + value.slug + "Amount").html(value.amount.toFixed(0));

godlike = new Godlike()

"""
The Procedure Main: This is where everything starts
"""

# All OnLoad Functions
# Modal Commented out during development

$(document).ready ->

    #$('#onLoadModal').modal();
    
    $('#fightEasier').click -> godlike.fight.makeEasier()
    $('#fightHarder').click -> godlike.fight.makeHarder()

godlike.load(); # Load the saved config.
godlike.start(); # Run every second
godlike.update_values(); # Update All Values (initial setting)