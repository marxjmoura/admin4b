(function ($) {

  $.fn.sidebar = function (event) {
    return this.each(function () {
      var $sidebar = $(this);

      switch (event) {
        case 'show': $sidebar.addClass('show'); return;
        case 'hide': $sidebar.removeClass('show'); return;
      }

      // Prevent duplicate events if called more than once
      if ($sidebar.prop('initialized')) return;

      $('[data-toggle="sidebar"]').on('click', function () {
        $sidebar.sidebar('show');
      });

      $('[data-dismiss="sidebar"]').on('click', function () {
        $sidebar.sidebar('hide');
      });

      $sidebar.prop('initialized', true);
    });
  };

})(jQuery);
