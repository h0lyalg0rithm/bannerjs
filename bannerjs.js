// Generated by CoffeeScript 1.7.1
(function() {
  var Banner, banner,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Banner = (function() {
    Banner.prototype.options = {
      speed: 300
    };

    Banner.prototype.extend = function(a, b) {
      var k;
      for (k in b) {
        if (b.hasOwnProperty(k)) {
          a[k] = b[k];
        }
      }
      return a;
    };

    function Banner(el, options) {
      this.el = el;
      this.ready = __bind(this.ready, this);
      this.options = this.extend({}, this.options);
      this.extend(this.options, options);
      if (typeof this.options.onload === "function") {
        this.options.onload.call();
      }
      this.ready();
    }

    Banner.prototype.ready = function() {
      return setTimeout(((function(_this) {
        return function() {
          return _this.show();
        };
      })(this)), this.options.speed);
    };

    Banner.prototype.show = function() {
      if (classie.hasClass(this.el, 'hidden')) {
        return classie.removeClass(this.el, 'hidden');
      }
    };

    return Banner;

  })();

  banner = new Banner(document.querySelectorAll('.bannerjs')[0], {
    callback: function() {
      return alert("sdsdsd");
    },
    speed: 10
  });

}).call(this);
