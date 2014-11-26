$        = require 'jquery'
godlike  = require './godlike'
upgrades = require './upgrades'

$( "#selectAction" ).selectable stop: ->
    result = $( "#select-result" ).empty()

    $( ".ui-selected", this ).each ->

        index = $( "#selectAction li" ).index( this )
        godlike.player.setAction($( this ).data('action'))

        $('#selectAction li[href="#' + godlike.player.getAction() + 'Actions"]')
            .tab('show')

        result.append( " #" + (index + 1))
    return true

$( "#fightSelect" ).selectable stop: ->
    result = $( "#select-result" ).empty()

    $( ".ui-selected", this ).each ->
    
        index = $( "#selectAction li" ).index( this )
        
        godlike.fight.setAction($( this ).data('action'))
        result.append( " #" + (index + 1))

$( "#buildSelect" ).selectable stop: ->
    godlike.build.setAction($( this ).data('action'))
    
    result = $( "#select-result" ).empty()
    $( ".ui-selected", this ).each ->
        index = $( "#selectAction li" ).index( this )
        result.append( " #" + (index + 1) )

$( "#gatherSelect" ).selectable stop = ->
    godlike.gather.setAction($( this ).data('action'))

    result = $( "#select-result" ).empty()

    $( ".ui-selected", this ).each ->
        index = $( "#selectAction li" ).index( this )
        result.append( " #" + ( index + 1 ) )

$('.doUpgrade').click ->
    upgradeName = $(this).data('upgrade-name')
    
    if not upgrades[upgradeName].purchased
        if gold.amount >= upgrades[upgradeName].cost.gold
            removeCash(upgrades[upgradeName].cost.gold)
            upgrades[upgradeName].effect()
            upgrades[upgradeName].purchased = true
            $(upgrades[upgradeName].class).addClass('hidden')
    
            $(upgrades[upgradeName].dependedOn).removeClass('hidden')
            $("#upgrades").prepend(upgrades[upgradeName].message).fadeIn('slow')
            godlike.update_values()
        else
            $("#info")
                .fadeIn(1000)
                .html('<span>You need more gold.</span>')
                .fadeOut(3000)

# Get company and mayor names and display them.
$('#modalClose').click ->
    names.city = document.getElementById('city').value
    document.getElementById("cityName").innerHTML = names.city
    names.player = document.getElementById('player').value
    document.getElementById("playerName").innerHTML = names.player

$('#save').click -> save()

class window.Action extends View

    constructor: (@resources) ->

    setAction: (action) ->
        @action = action

    getAction: ->
        return @action

    gainSkill: (skill, level) ->
        modifier = 0
        if skill.amount < 90
            power = (1 + (skill.amount / 10))
            modifier = Math.pow(.1, power)
        else
            overninety = skill.amounlt - 90
            multiple = 9 + overninety
            modifier = Math.pow(.1, multiple)

        difference = Math.floor(skill.amount) - Math.floor(level)

        if Math.floor(skill.amount) > Math.floor(level)
            #Higher Current Skill then opponent(Easy)
            modifier = Math.pow(modifier, difference)
        
        if Math.floor(skill.amount) < Math.floor(level)
            modifier = modifier * Math.abs(difference)

        skill.amount = skill.amount + modifier
        abilities[skill.ability].amount =
            abilities[skill.ability].amount + modifier / 10
