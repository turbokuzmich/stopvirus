import once from 'lodash/once';
import partial from 'lodash/partial';

/**
 * @param {string} id
 * @param {string} token
 * @param {Function} setCaptcha
 */
export default function initCaptcha(id, token, setCaptcha) {
  const initCaptcha = once(() => {
    window.grecaptcha.render(id, {
      sitekey: token,
      callback: setCaptcha,
      'expired-callback': partial(setCaptcha, ''),
    });
  });

  if (window.grecaptcha) {
    window.grecaptcha.ready(initCaptcha);
  } else {
    window.recaptchaCallbacks = window.recaptchaCallbacks || [];
    window.recaptchaCallbacks.push(initCaptcha);
  }
}
