'use strict';

console.log('start');
setTimeout(() => {
  console.log('its working');
  setTimeout(() => {
    console.log('END!!!');
  }, 2000);
}, 2000);
