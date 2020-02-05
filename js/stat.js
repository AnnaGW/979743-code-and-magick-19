"use strict";

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TEXT_HEIGHT = 20;
var GISTOGRAM_HEIGHT = 150;
var GISTOGRAM_Y = 100;

var nameWidth = BAR_WIDTH + BAR_GAP;
var gistogramWidth = BAR_WIDTH * 4 + BAR_GAP * 3;
var gistogramGap = (CLOUD_WIDTH - gistogramWidth) / 2;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var findMax = function(array) {
  var maxInArray = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] > maxInArray) {
      maxInArray = array[i];
    }
  }
  return maxInArray;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#fff");

  ctx.fillStyle = "#000";
  ctx.font = "16px PT Mono";
  ctx.fillText(
    "Ура! Вы победили!",
    CLOUD_X + GAP * 2,
    CLOUD_Y + GAP + TEXT_HEIGHT
  );
  ctx.fillText(
    "Список результатов:",
    CLOUD_X + GAP * 2,
    CLOUD_Y + GAP + TEXT_HEIGHT * 2
  );

  for (var i = 0; i < names.length; i++) {
    if (names[i] === "Вы") {
      var swap = names[0];
      names[0] = names[i];
      names[i] = swap;
      swap = times[0];
      times[0] = times[i];
      times[i] = swap;
    }
  }

  var maxTime = findMax(times);
  var coefficient = GISTOGRAM_HEIGHT / maxTime;

  var barColors = ["rgba(255, 0, 0, 1)"];
  for (i = 1; i < names.length; i++) {
    var saturation = "hsl(240, " + Math.random() * 100 + "%, 50%)";
    barColors.push(saturation);
  }

  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = barColors[i];
    ctx.fillRect(
      CLOUD_X + gistogramGap + nameWidth * i,
      GISTOGRAM_Y + (150 - Math.round(times[i] * coefficient)),
      BAR_WIDTH,
      Math.round(times[i] * coefficient)
    );
    ctx.fillStyle = "#000";
    ctx.fillText(
      names[i],
      CLOUD_X + gistogramGap + nameWidth * i,
      CLOUD_HEIGHT
    );
    ctx.fillText(
      Math.round(times[i]),
      CLOUD_X + gistogramGap + nameWidth * i,
      GISTOGRAM_Y +
        (GISTOGRAM_HEIGHT - Math.round(times[i] * coefficient) - TEXT_HEIGHT)
    );
  }
};
