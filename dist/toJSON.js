"use strict";

module.exports = function (state) {
  return {
    toJSON: function toJSON() {
      return state;
    }
  };
};