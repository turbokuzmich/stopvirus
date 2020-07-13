const reCaptcha = require('recaptcha2');

/**
 * @param {Object} options
 * @param {string} options.siteKey
 * @param {string} options.secretKey
 * @param {Boolean} [options.ssl=true]
 */
module.exports = function (options) {
  const recaptcha = new reCaptcha(options);

  return function (req, res, next) {
    req.recaptcha = recaptcha;

    next();
  };
};
