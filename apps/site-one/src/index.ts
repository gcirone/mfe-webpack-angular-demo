import(/* webpackChunkName: "polyfills" */ './polyfills');

document.addEventListener('DOMContentLoaded', () => {
  import(/* webpackChunkName: "bootstrap" */ './main');
});
