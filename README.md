# Scroll Bus

[![Build Status](https://travis-ci.org/firstandthird/scroll-bus.svg?branch=master)](https://travis-ci.org/firstandthird/scroll-bus)
<span class="scroll-bus-npmversion"><a href="https://npmjs.org/package/scroll-bus" title="View this project on NPM"><img src="https://img.shields.io/npm/v/scroll-bus.svg" alt="NPM version" /></a></span>

Tiny library to centralize scroll handlers.

```javascript
import ScrollBus from 'scroll-bus';

ScrollBus.on(event => {
  // Do stuff
});

// Debounced
ScrollBus.on(event => {
  // Do stuff
}, 150);

// Debounced and immediate
ScrollBus.on(event => {
  // Do stuff
}, 150, true);

// Removes handler
ScrollBus.off(handler);

// Removes all handlers
ScrollBus.off();
```
