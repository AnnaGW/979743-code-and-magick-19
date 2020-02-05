"use strict";
var OBJECTS_QUANTITY = 4;
var NAMES = [
  "Иван",
  "Хуан Себастьян",
  "Мария",
  "Кристоф",
  "Виктор",
  "Юлия",
  "Люпита",
  "Вашингтон"
];
var SURNAMES = [
  "да Марья",
  "Верон",
  "Мирабелла",
  "Вальц",
  "Онопко",
  "Топольницкая",
  "Нионго",
  "Ирвинг"
];
var COAT_COLORS = [
  "rgb(101, 137, 164)",
  "rgb(241, 43, 107)",
  "rgb(146, 100, 161)",
  "rgb(56, 159, 117)",
  "rgb(215, 210, 55)",
  "rgb(0, 0, 0)"
];
var EYES_COLORS = ["black", "red", "blue", "yellow", "green"];

var selectRandomFromArray = function(array) {
  var randomIndex = Math.floor(Math.random() * (array.length - 1) + 1);
  return array[randomIndex - 1];
};

var setup = document.querySelector(".setup");
setup.classList.remove("hidden");

var createObject = function() {
  var dataItem = {};
  dataItem.name =
    selectRandomFromArray(NAMES) + " " + selectRandomFromArray(SURNAMES);
  dataItem.coatColor = selectRandomFromArray(COAT_COLORS);
  dataItem.eyesColor = selectRandomFromArray(EYES_COLORS);
  return dataItem;
};

var data = [];
var createDatа = function() {
  for (var i = 1; i <= OBJECTS_QUANTITY; i++) {
    data[i - 1] = createObject();
  }
};
createDatа();

var setupConteiner = document.querySelector(".setup-similar-list");
var wizardTemplate = document.querySelector("#similar-wizard-template").content;
var newWizardTemplate = wizardTemplate.querySelector(".setup-similar-item");

var createNewWizard = function(wizardIndex) {
  var newWizard = newWizardTemplate.cloneNode(true);
  var newWizardName = newWizard.querySelector(".setup-similar-label");
  newWizardName.textContent = data[wizardIndex].name;
  var newWizardCoat = newWizard.querySelector(".wizard-coat");
  newWizardCoat.style.fill = data[wizardIndex].coatColor;

  setupConteiner.appendChild(newWizard);
};

for (var i = 1; i <= OBJECTS_QUANTITY; i++) {
  createNewWizard(i - 1);
}

var setupSimilar = document.querySelector(".setup-similar");
setupSimilar.classList.remove("hidden");
