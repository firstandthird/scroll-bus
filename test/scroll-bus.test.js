import ScrollBus from '../index';
import test from 'tape-rollup';

const init = () => {
  const container = document.createElement('div');
  container.id = 'fixture';
  container.style.height = '2000px';
  document.body.appendChild(container);
};

init();

test('ScrollBus plugin exists', assert => {
  assert.equal(typeof ScrollBus.on, 'function', 'on is defined');
  assert.equal(typeof ScrollBus.off, 'function', 'off is defined');
  assert.end();
});

test('Non debounced handler', assert => {
  let called = false;

  ScrollBus.on(() => {
    called = true;
  });

  window.scrollTo(0, 10);

  setTimeout(() => {
    assert.equal(called, true, 'handler is called immediately');
    ScrollBus.off();
    assert.end();
  });
});

test('Debounced handler', assert => {
  let debouncedCall = false;
  let called = false;

  ScrollBus.on(() => {
    called = true;
  });

  ScrollBus.on(() => {
    debouncedCall = true;
  }, 100);

  window.scrollTo(0, 11);

  setTimeout(() => {
    assert.equal(called, true, 'handler is called immediately');
    assert.equal(debouncedCall, false, 'debounced handler is not called immediately');
  });

  setTimeout(() => {
    assert.equal(debouncedCall, true, 'debounced handler is called after said time');
    ScrollBus.off();
    assert.end();
  }, 101);
});

test('Remove handler', assert => {
  let called = false;
  const handler = () => {
    called = true;
  };

  ScrollBus.on(handler);
  ScrollBus.off(handler);

  window.scrollTo(0, 12);

  setTimeout(() => {
    assert.equal(called, false, 'handler is not called if removed');
    assert.end();
  });
});

test('Remove all handlers', assert => {
  let called = false;

  ScrollBus.on(() => {
    called = true;
  });
  ScrollBus.on(() => {
    called = true;
  });
  ScrollBus.on(() => {
    called = true;
  });

  ScrollBus.off();

  window.scrollTo(0, 13);

  setTimeout(() => {
    assert.equal(called, false, 'all handlers removed with off');
    assert.end();
  });
});
