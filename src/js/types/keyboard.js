(function() {
  window.keyboard = function(key) {
    this.isArrowDown = function() {
      return key === 40;
    };

    this.isArrowUp = function() {
      return key === 38;
    };

    this.isEnter = function() {
      return key === 13;
    };

    this.isEscape = function() {
      return key === 27;
    };

    return this;
  };
})();
