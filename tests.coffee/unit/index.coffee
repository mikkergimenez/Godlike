'use strict'

mocha  = require "mocha"
expect = require "chai"
    .expect
Player = require "../../app/js/modules/player"

describe('Unit Test Suite', ->

    it('should have tests', ->
        expect(true).to.be.true
    )

    it('should start with an HP of ten', ->
        name = 'Mik'
        player = new Player(name)
        expect(player.name).to.equal(name)
        expect(player.hp).to.equal(10)
        expect(player.maxhp).to.equal(10)
        expect(player.action).to.equal('fight')
    )
    
    it('should be dead if dead', ->
        name = 'Mik'
        player = new Player(name)
        expect(player.isDead()).to.be.false
    )

    it('should return the correct action', ->
        name = 'Mik'
        player = new Player(name)
        expect(player.getAction()).to.equal('fight')
    )

    it('should set and return an action', ->
        name = 'Mik'
        player = new Player(name)
        player.setAction('build')
        expect(player.getAction()).to.equal('build')
    )

    it('should rest correctly', ->
        name = 'Mik'
        skills = {}
        skills.resting = {}
        skills.resting.amount = 1
        player = new Player(name, skills)
        player.hp = 5
        player.maxhp = 10
        player.rest()
        expect(player.hp).to.equal(5)
    )

    it('should have 2 tests', ->
        expect(false).to.be.false
    )

)
