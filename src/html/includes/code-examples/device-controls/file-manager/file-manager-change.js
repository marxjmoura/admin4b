$('[data-toggle="file-manager"]').on('file:change', function (e, file) {
  // file.dataURL is loaded by the component
  console.log('Base64 URL: ', file.dataURL);

  // file.errors is binded by the component after validation
  if (file.errors.length) {
    console.log('File errors: ', file.errors);
  }
});
