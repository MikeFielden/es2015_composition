module.exports = (state) => ({
  poop: () => {
    if (state['poops'] === undefined) {
      state['poops'] = [];
    }

    state['poops'].push(new Date());
  }
});