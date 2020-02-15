'use strict';

(function () {

  var createObject = function () {
    var dataItem = {};
    dataItem.name =
      window.util.selectRandomFromArray(window.consts.NAMES) +
      ' ' +
      window.util.selectRandomFromArray(window.consts.SURNAMES);
    dataItem.coatColor = window.util.selectRandomFromArray(
        window.consts.COAT_COLORS
    );
    dataItem.eyesColor = window.util.selectRandomFromArray(
        window.consts.EYES_COLORS
    );
    return dataItem;
  };

  var get = function () {
    var data = [];
    for (var i = 1; i <= window.consts.OBJECTS_QUANTITY; i++) {
      data[i - 1] = createObject();
    }
    return data;
  };

  window.creationData = {
    get: get
  };
})();
