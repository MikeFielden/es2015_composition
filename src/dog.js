let barker = require('./abilities/bark')
  , pooper = require('./abilities/poop')
  , eater = require('./abilities/eat')
  , toJSON = require('./toJSON')
  ;

module.exports = (name) => {
  // initial "state" of the dog
  let state = {
    name,
    speed: 100,
    poops: []
  };

  return Object.assign(
    {},
    barker(state),
    pooper(state),
    eater(state),
    toJSON(state)
  );
};