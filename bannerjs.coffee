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
		$(@el).removeClass 'hidden'
		
	close:() ->
		$(@el).addClass 'hidden'



banner = new Banner $('.bannerjs')[0],
	callback: ->
		alert "sdsdsd"
	speed: 10

banner.close()
# close = (obj) ->
# 	con
# 	obj.close()
# setTimeout close banner, 5000