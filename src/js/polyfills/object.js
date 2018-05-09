(function () {

  var userAgent = window.navigator.userAgent;
  var isIE10 = userAgent.indexOf("MSIE ") > 0;
  var isIE11 = userAgent.indexOf('Trident/') > 0;

  if (isIE10 || isIE11) {
    Object.keys = function (obj) {
      var keys = [];

      if (!obj) {
        return keys;
      }

      for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
          keys.push(p);
        }
      }

      return keys;
    };
  }

})();
