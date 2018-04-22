(function () {
  var numberRegex = /\d/;
  var letterRegex = /[a-zA-Z]/;

  window.keyboard = function (keyCode) {
    var char = String.fromCharCode(keyCode);

    return {
      isArrowDown: keyCode === 40,
      isArrowUp: keyCode === 38,
      isBackspace: keyCode === 8,
      isDelete: keyCode === 46 || keyCode === 63272, /* Safari */
      isEnter: keyCode === 13,
      isEscape: keyCode === 27,
      isLetter: letterRegex.test(char),
      isNumber: numberRegex.test(char)
    };
  };
})();
