'use strict'

View = require './view'

class Player extends View

    deathMsg: '<span class=\"text-danger\">Dead</span>&nbsp;#{@hp}/#{@maxhp}'

    equipment: require './equipment'

    bindings:
        '#hp': () ->
            @maxhp = 10 + Math.pow(Math.floor(@skills.resistance.amount), 2)
            return '#{@hp}/#{@maxhp}'
            if @dead
                return @deathMsg


    constructor: (@name, @skills) ->
        @hp = 10
        @maxhp = 10
        @dead = false
        @action = 'fight'
        true

    getAction: ->
        return @action
    
    setAction: (action) ->
        @action = action
    
    isDead: () ->
        if @dead
            return true
        return false

    takeDamage: (damage, level) ->
        console.log('Resistance gaining at level ' + level)
        action.gainSkill(@skills.resistance, level)
        @hp = @hp - damage
        if @hp <= 0
            @dead = true

    tryLife: ->
        @rest()
        if @hp == @maxhp
            @dead = false

    rest: ->
        if @hp < @maxhp
            @hp += Math.ceil(@skills.resting.amount)
            if @hp > @maxhp
                @hp = @maxhp
            action.gainSkill(@skills.resting, 1)
            return true
        return false


module.exports = Player