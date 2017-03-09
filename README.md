# Scroll Bus

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
