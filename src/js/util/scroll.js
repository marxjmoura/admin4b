(function ($) {

  $.fn.scrollToBottom = function () {
    return this.each(function () {
      var $element = $(this);
      var scrollHeight = $element.prop('scrollHeight');

      $element.scrollTop(scrollHeight);
    });
  };

})(jQuery);
