'use strict';

var barker = require('./abilities/bark'),
    pooper = require('./abilities/poop'),
    eater = require('./abilities/eat'),
    toJSON = require('./toJSON');

module.exports = function (name) {
  // initial "state" of the dog
  var state = {
    name: name,
    speed: 100,
    poops: []
  };

  return Object.assign({}, barker(state), pooper(state), eater(state), toJSON(state));
};