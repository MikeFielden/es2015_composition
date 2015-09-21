'use strict';

module.exports = function (state) {
  return {
    poop: function poop() {
      if (state['poops'] === undefined) {
        state['poops'] = [];
      }

      state['poops'].push(new Date());
    }
  };
};