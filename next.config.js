const connect = require('connect');
const helmet = require('helmet');

module.exports = function () {
  const app = connect();

  app.use(helmet());

  return {
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
