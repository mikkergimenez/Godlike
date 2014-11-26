'use strict'

class View
    
    render: () ->
        if @bindings?
            for k, v of @bindings
                if jQuery.isFunction(this[v])
                    $(k).html(this[v]())
                else
                    $(k).html(this[v])



module.exports = View