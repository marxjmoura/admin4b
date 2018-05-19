(function ($) {

  $.fn.navProgress = function () {
    return this.each(function () {
      var $nav = $(this);
      var $items = $nav.find('.nav-item');
      var $links = $items.find('.nav-link');

      $links.on('show.bs.tab', function (e) {
        var $item = $(e.target).closest('.nav-item');

        $item.prevAll().addClass('complete');
        $item.nextAll().addBack().removeClass('complete');
      });
    });
  };

})(jQuery);
