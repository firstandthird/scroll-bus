/* eslint-env browser */
import { on } from 'domassist';
import tinybounce from 'tinybounce';

let scrollHandlers = [];

on(window, 'scroll', event => {
  scrollHandlers.forEach(listener => listener.handler.call(null, event));
});

export default {
  on(callback, wait, immediate) {
    let handler = callback;

    if (wait) {
      handler = tinybounce(callback, wait, immediate);
    }

    scrollHandlers.push({ handler, callback, wait, immediate });
  },
  off(callback, wait, immediate) {
    if (!callback) {
      scrollHandlers.length = 0;
    } else {
      scrollHandlers = scrollHandlers.filter(listener => listener.callback !== callback &&
        listener.wait !== wait &&
        listener.immediate !== immediate);
    }
  }
};
