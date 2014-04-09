class Banner
	options:
		speed: 300
	extend: (a , b) ->
		for k of b
			a[k] = b[k] if b.hasOwnProperty(k)
		return a
	constructor: (@el, options) ->
		@options = @extend {}, @options
		@extend @options, options
		@options.onload.call() if typeof @options.onload == "function"
		@ready()
	ready:() =>
		setTimeout (()=> @show()), @options.speed

	show:() ->
		classie.removeClass @el, 'hidden' if classie.hasClass @el, 'hidden'



banner = new Banner document.querySelectorAll('.bannerjs')[0],
	callback: ->
		alert "sdsdsd"
	speed: 10