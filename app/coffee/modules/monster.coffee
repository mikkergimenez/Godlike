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
        killed: 0,
    },
    rats: {
        display: 'Rats',
        level: 2,
        toHit: 2,
        toHitInc: .3,
        damage: 3,
        damageInc: .3,
        armor: 1,
        armorInc: .3
        hp: 20,
        hpInc: 2,
        killed: 0,
    }
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
}

class window.Monster

    getMonster: () ->
        switch @difficulty
            when 1 then return monsters.mice
            when 2 then return monsters.rats
            when 3 then return monsters.direRats

    getName: () ->
        return @display

    constructor: (@difficulty)->
        @monsterInst = @getMonster()
        @display     = 'Healthy ' + @monsterInst.display
        @level       = Math.floor(@monsterInst.level)
        @toHit       = Math.floor(@monsterInst.toHit)
        @damage      = Math.floor(@monsterInst.damage)
        @armor       = Math.floor(@monsterInst.armor)
        @hp          = Math.floor(@monsterInst.hp)
        @maxhp       = Math.floor(@monsterInst.hp)
        @dead        = false

    setHP: (value) ->
        @hp = value

    render: () ->
        $('#monster-name').text(@display)
        $('#monster-level').text(@level)
        $('#monster-hp').text(@hp)
        $('#monster-max-hp').text(@maxhp)

    doDeath: () ->
        @dead               = true
        @monsterInst.killed++
        @monsterInst.hp     += @monsterInst.hpInc
        @monsterInst.damage += @monsterInst.damageInc
        @monsterInst.toHit  += @monsterInst.toHitInc
        @monsterInst.armor  += @monsterInst.armorInc
        @monsterInst.level  += .01

    takeDamage: (damage) ->
        console.log('Doing ' + damage + ' Damage Leaving ' + @hp + ' hp.');
        if @hp > 0
            @hp -= damage
            if @maxhp * .5 > @hp
                @display = 'Dying ' + @monsterInst.display
            return false
        else if @hp <= 0
            @setHP(0)
            @doDeath()
            return true
        return false