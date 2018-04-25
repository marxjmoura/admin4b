(function ($) {

  var regex = /^(\d*\.?\d+)(B|KB|MB|GB)?$/gi;
  var exponentOf = { B: 0, KB: 1, MB: 2, GB: 3 };

  function toBytes(size, unit) {
    return Number(size) * Math.pow(1024, exponentOf[unit]);
  }

  $.fn.fileManager.maxsize = function (file, maxsize) {
    if (!maxsize) return true;
    if (!maxsize.match(regex)) return false;

    var matches = regex.exec(maxsize);
    var size = matches[1];
    var unit = matches[2];

    return file.size <= toBytes(size, unit);
  };

})(jQuery);
