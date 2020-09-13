const connect = require('connect');
const helmet = require('helmet');

module.exports = function () {
  const app = connect();

  app.use(helmet());

  app.use((req, res, next) => {
    req.recaptchaSiteKey = process.env.RECAPTCHA_SITE_KEY;

    next();
  });

  return {
    env: {
      staticDomain: 'd2dkxuu4i3rety.cloudfront.net',
    },
    middleware: async function (req, res) {
      return new Promise(function (resolve, reject) {
        app.handle(req, res, function (error) {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
    },
  };
};
