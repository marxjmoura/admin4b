(function ($) {

  $.fn.camera = function (event) {
    return this.each(function () {
      switch (event) {
        case 'play': $.fn.camera.play.apply(this); break;
        case 'stop': $.fn.camera.stop.apply(this); break;
        case 'snapshot': $.fn.camera.snapshot.apply(this); break;
      }
    });
  };

})(jQuery);
