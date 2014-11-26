build = {
    "brick": "Brick"
    "plank": "Plank"
    "slug": "Text"
}

for slug, text of build
    $('#buildSelect').append('<li class="ui-widget-content" id="'+slug+'" data-action="'+slug+'">'+text+'</li>')

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
}

class window.Build extends Action

	getBuildingSkill: () ->
        return skills.brickmaking

    go: () ->
        console.log "Going Build"
        if @resources.stone.amount > 0
            @resources.stone.amount = @resources.stone.amount - .1
            @resources.brick.amount = @resources.brick.amount + .1
        else
            $("#selectAction #gather").click()
        return "Making Brick."