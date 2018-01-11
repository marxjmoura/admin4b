(function () {

  String.prototype.contains = function (str) {
      return new RegExp(str, "i").test(this);
  };

  String.prototype.replaceAll = function (search, replacement) {
      return this.replace(new RegExp(search, 'g'), replacement);
  };

})();
