'use strict';

var isOdd = require('is-odd');

var isEven = require('is-even');

module.exports = function isOddOrEven(i, firstCheckIfNumberIsOddAndThenContinueToEvenCheck = true) {

  if (firstCheckIfNumberIsOddAndThenContinueToEvenCheck) {
    return isOdd(i) || isEven(i);
  }

  return isEven(i) || isOdd(i);
};
