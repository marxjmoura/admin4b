(function () {

  Date.prototype.addDays = function (days) {
    var date = new Date(this.getTime());
    date.setDate(this.getDate() + days);

    return date;
  };

  Date.prototype.addMonths = function (months) {
    var year = this.getFullYear();
    var month = this.getMonth() + months;
    var date = new Date(year, month, 1);
    var lastDate = new Date(year, month + 1, 0);

    if (this.getDate() > lastDate.getDate()) {
      date.setDate(lastDate.getDate());
    } else {
      date.setDate(this.getDate());
    }

    return date;
  };

  Date.prototype.addYears = function (years) {
    var date = new Date(this.getTime());
    date.setFullYear(this.getFullYear() + years);

    return date;
  };

})();
