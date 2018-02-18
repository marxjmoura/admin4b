(function ($) {

  $.fn.observe = function (callback) {
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        callback.apply(mutation.target);
      });
    });

    return this.each(function () {
      var $element = $(this);

      $element.on('DOMAttrModified onpropertychange', function () {
        callback.apply(this);
      });

      observer.observe($element.get(0), { attributes: true });
    });
  };

})(jQuery);
