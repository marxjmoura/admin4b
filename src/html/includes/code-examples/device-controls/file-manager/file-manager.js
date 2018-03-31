$('[data-toggle="file-manager"]').on('file:change', function (e, file) {
  $('#file-name').text(file.name);
  $('#file-size').text((file.size / 1024).toFixed(2) + ' KB');
  $('#is-invalid').toggleClass('d-none', !file.errors.length);
  $('#is-valid').toggleClass('d-none', !!file.errors.length);

  if (file.type.startsWith('image')) {
    $('#preview').attr('src', file.dataURL).removeClass('d-none');
  } else {
    $('#preview').removeAttr('src').addClass('d-none');
  }

  $('#file-empty').addClass('d-none');
  $('#file-data').removeClass('d-none');
});
