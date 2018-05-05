$('[data-form-step]').on('click', function () {
  var tabId = $(this).attr('data-form-step');
  $('[href="' + tabId + '"]').tab('show');
});

$('#formOrder').on('submit', function(e) {
  $('.nav-tabs-progress').find('.nav-item').last().addClass('complete');
  e.preventDefault();
});
