'use strict'

# mocha  = require 'mocha'
expect = require "chai"
    .expect
Player = require "../../../app/js/modules/player"

describe('Functional Test Suite', ->

    it('Should run tests', ->
        expect(true).to.be.true
    )

    #it('should start with an HP of ten', ->
    #    player = new Player
    #    expect(Player.hp).to.be(10)
    # )

    it('should read elements on the page', ->
        expect($('#testElement')).to.have.class('is-active')
    )

)
