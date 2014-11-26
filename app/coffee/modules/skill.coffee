class window.Skill extends Stat
	constructor: (@display, @slug, @action, @ability) ->
		@amount = 0

window.skills = []
window.skills.handToHand 	= new Skill 'Hand to Hand', 'hand-to-hand', 'your bare hands', 'strength'
window.skills.mining 		= new Skill 'Mining', 'mining', 'you mine for', 'strength'
window.skills.woodcutting 	= new Skill 'Woodcutting', 'woodcutting', 'you chop', 'strength'
window.skills.brickmaking 	= new Skill 'Brickmaking', 'brickmaking', 'you make', 'strength'
window.skills.weapons 		= new Skill 'Weapons', 'weapons', 'you forge', 'strength'

window.skills.cantrips 		= new Skill 'Cantrips', 'cantrips', 'a spark from your finger', 'intelligence'

window.skills.resting 		= new Skill 'Resting', 'resting', 'ability to heal HP with rest', 'constitution'
window.skills.resistance 	= new Skill 'Resistance', 'resistance', 'Ability to take damange.', 'constitution'
