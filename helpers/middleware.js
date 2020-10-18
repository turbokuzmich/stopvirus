export async function runMiddleware(fn, req, res) {
  return new Promise((resolve, reject) => {
    fn(req, res, (error) => {
      if (error) {
        return reject(error);
      }

      resolve();
    });
  });
}
