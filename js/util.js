'use strict';

(function() {
  var selectRandomFromArray = function(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  window.util = {
    selectRandomFromArray: selectRandomFromArray,
  };
})();
