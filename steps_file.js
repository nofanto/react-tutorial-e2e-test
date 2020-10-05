// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    typeInField: async function(locator, value) {
      this.click(locator);
      for (var i = 0; i < value.length; i++) {
        this.pressKey(value.charAt(i));
      }
    }
  });
}
