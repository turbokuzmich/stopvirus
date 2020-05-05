import easeInOutCubic from './ease-in-out-cubic';

export default function animatedScrollTo(scrollTo, duration, callback) {
  const scrollFrom = window.scrollY || window.pageYOffset || 0;
  const scrollDiff = scrollTo - scrollFrom;
  const startedAt = +new Date();

  function animateScroll() {
    const now = +new Date();

    if (now - startedAt >= duration) {
      window.scrollTo(0, scrollTo);
      callback();
    } else {
      const newScrollPos = easeInOutCubic(now - startedAt, scrollFrom, scrollDiff, duration);

      window.scrollTo(0, newScrollPos);

      requestAnimationFrame(animateScroll);
    }
  }

  animateScroll();
}
