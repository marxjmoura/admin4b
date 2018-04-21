$('#spinner-toggle').on('click', function () {
  $('#spinner').addClass('show');

  setTimeout(function () {
    $('#spinner').removeClass('show');
  }, 3000);
});
