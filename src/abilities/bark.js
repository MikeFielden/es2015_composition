module.exports = (state) => ({
  bark: () => console.log(`Woof, I am barking and my name is ${state.name}`)
});