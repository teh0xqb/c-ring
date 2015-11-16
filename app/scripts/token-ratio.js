
// ------------------------------ imports --------------------------------------

var BigNumber = require('big-number').n; // to work with BIG numbers in javascript :)
// Supported BigNumber methods: add/plus, minus/subtract,
// multiply/mult, divide/div, power/pow, mod,
// equals, lt, lte, gt, gte, isZero, abs
// Sample : var big = BigNumber(5).plus(97).minus(53).plus(434).multiply(5435423).add(321453).multiply(21).div(2).pow(2);
// Sample out: 760056543044267246001 // when converting to string

var assert = require('assert');

// ------------------------------ globals -------------------------------------

var MAX_TOKEN = BigNumber(2).pow(127).plus(1)+''; // 2^127 is biggest token value

// 2^127 = 170141183460469231731687303715884105728
// 2^ 126 = 85070591730234615865843651857942052864


/**
 * The maximum token id allowed is 2^127. There's one computer science challenge:
 * javascript's max number is 2^53-1
 *
 * From ECMA Section 8.5 - Numbers:
 * > Note that all the positive and negative integers whose magnitude is no
 * > greater than 2^53 are representable in the Number type...
 *
 * ES6 defines it as Number.MAX_SAFE_INTEGER.
 *
 * @param {!String} token a token to calculate ratio of, compared to the MAX_TOKEN value
 * @returns {Number} ratio of token, as js number
 *
 *
 * @author Joel Quiles
 * @since 2015-Nov-16
 */
module.exports = function (token) {

  assert(typeof token === 'string' && !isNaN(token), 'token is not a string parseable to number');

  if(token === '0' || token === '') {                     // I WILL NOT DIVIDE BY 0
    return 0;
  }
  // TODO: for another algorithm, check modulus 2, then use log and make ratio out of 127 ?
  var inverseRatio = BigNumber(MAX_TOKEN).divide(token);
  return parseInt(inverseRatio, 10);
}
