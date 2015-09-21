"use strict";

module.exports = function (state) {
  return {
    bark: function bark() {
      return console.log("Woof, I am barking and my name is " + state.name);
    }
  };
};