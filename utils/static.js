/**
 * @param {string} resource
 *
 * @returns {string}
 */
export default function getUrl(resource) {
  const staticDomain = process.env.staticDomain;

  return `https://${staticDomain}/${resource}`;
}
