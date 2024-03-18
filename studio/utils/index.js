export function endWithSlash(url) {
  return url.endsWith('/') ? url : `${url}/`;
}