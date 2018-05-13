(function ($) {

  $.fn.sidebar = function () {
    return this.each(function () {
      var $sidebar = $(this);

      // Prevent duplicate events if called more than once
      if ($sidebar.prop('initialized')) return;

      $('[data-toggle="sidebar"]').on('click', function () {
        $sidebar.addClass('sidebar-open');
      });

      $('[data-dismiss="sidebar"]').on('click', function () {
        $sidebar.removeClass('sidebar-open');
      });

      $sidebar.prop('initialized', true);
    });
  };

})(jQuery);
