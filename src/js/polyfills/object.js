(function () {

  var userAgent = window.navigator.userAgent;
  var ie10 = userAgent.indexOf("MSIE ") > 0;
  var ie11 = userAgent.indexOf('Trident/');

  if (ie10 || ie11) {
    Object.keys = function (obj) {
      var keys = [];

      for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
          keys.push(p);
        }
      }

      return keys;
    };
  }

})();
