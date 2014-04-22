(function(){
	$.fn.banner = function(options){
		var options = $.extend({}, $.fn.defaults, options);
		if(typeof options.onload === "function"){
			options.onload.call();
			setTimeout(this.show(this), options.loadafter);
		}
		return this;
	}
	$.fn.show = function(element){
		element.removeClass('hidden');
	}
	$.fn.removebanner = function(){
		this.addClass('hidden');
	}

	$.fn.defaults = {
		loadafter: 300
	}
}(jQuery));