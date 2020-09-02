export default `window.recaptchaCallbacks = window.recaptchaCallbacks || [];

function onRecaptchaLoad() {
  recaptchaCallbacks.forEach(function(callback) {
    callback();
  })
}`;
