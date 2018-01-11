(function() {
  $.fn.onFocusOut = function(callback) {
    var $element = $(this);
    var $document = $(document);

    return this.each(function () {
      function focusOut(e) {
        if (!$(e.target).closest($element).length) {
          if (typeof callback === 'function') {
            callback.call(this);
          }
        }
      }

      $document.on('click', focusOut);
      $document.find('input').on('focus', focusOut);
      $document.find('select').on('focus', focusOut);
      $document.find('textarea').on('focus', focusOut)
      $document.find('button').on('focus', focusOut);
      $document.find('a').on('focus', focusOut);
    });
  };
})();
