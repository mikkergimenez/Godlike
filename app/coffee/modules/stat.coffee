
class Stat extends View
    constructor: (@display, @slug, @amount = 0) ->

    add: (num) ->
        if num
            @amount += num
        else
            @amount++

    sub: (num) ->
        if num
            @amount -= num
        else
            @amount--
