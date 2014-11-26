class window.Time extends View
	bindings:
		'#time': 'prettyTime'

	constructor: () ->
		@hour = 10
		@ampm = 'am'
		console.log @hour

	afterHours: () ->
		if @time > 22
			return true
		if @time < 6
			return true
		return false

	switch_am_pm: () ->
		@ampm = if 'ampm' is 'pm' then 'am' else 'pm'

	prettyTime: () ->
		return @hour + ":00 " + @ampm

	increment: () ->
		if @hour < 12
			@hour += 1
		else
			@hour = 1
			@switch_am_pm()
