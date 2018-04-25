$(function () {
  $('[data-toggle="sidebar"]').on('click', function () {
    $('.app-sidebar').addClass('sidebar-open');
  });

  $('[data-dismiss="sidebar"]').on('click', function () {
    $('.app-sidebar').removeClass('sidebar-open');
  });
});
