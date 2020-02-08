'use strict';

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var OBJECTS_QUANTITY = 4;
var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var FIREBALL_COLORS = [
'#ee4830',
'#30a8ee',
'#5ce6c0',
'#e848d5',
'#e6e848'
];

var selectRandomFromArray = function(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    setup.classList.add('hidden');
  }
});

var setupWizardForm = document.querySelector('.setup-wizard-form');
var userNameInput = setupWizardForm.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять не менее, чем из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя должно состоять не более, чем из 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var userWizard = document.querySelector('.setup-player');

var userWizardCoat = userWizard.querySelector('.wizard-coat');
var userWizardCoatInputValue = userWizard.querySelector('#coat-color');
var userWizardEyes = userWizard.querySelector('.wizard-eyes');
var userWizardEyesInputValue = userWizard.querySelector('#eyes-color');
var userWizardFireball = userWizard.querySelector('.setup-fireball-wrap');
var userWizardFireballInputValue = userWizard.querySelector('#fireball-color');

var ChangeColorOnClick = function (element, elementInputValue, colorArray) {
  element.style.fill = selectRandomFromArray(colorArray);
  elementInputValue.value = element.style.fill;
};

var ChangeColorFireballOnClick = function (element, elementInputValue, colorArray) {
  var fireballColor = selectRandomFromArray(colorArray);
  element.style.backgroundColor = fireballColor;
  elementInputValue.value = fireballColor;
};

userWizardCoat.addEventListener('click', function () {
  ChangeColorOnClick(userWizardCoat, userWizardCoatInputValue, COAT_COLORS);
});

userWizardEyes.addEventListener('click', function () {
  ChangeColorOnClick(userWizardEyes, userWizardEyesInputValue, EYES_COLORS);
});

userWizardFireball.addEventListener('click', function () {
  ChangeColorFireballOnClick(userWizardFireball, userWizardFireballInputValue, FIREBALL_COLORS);
});

var createObject = function() {
  var dataItem = {};
  dataItem.name =
    selectRandomFromArray(NAMES) + ' ' + selectRandomFromArray(SURNAMES);
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

var setupConteiner = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content;
var newWizardTemplate = wizardTemplate.querySelector('.setup-similar-item');

var createNewWizard = function(wizardData) {
  var newWizard = newWizardTemplate.cloneNode(true);
  var newWizardName = newWizard.querySelector('.setup-similar-label');
  newWizardName.textContent = wizardData.name;
  var newWizardCoat = newWizard.querySelector('.wizard-coat');
  newWizardCoat.style.fill = wizardData.coatColor;

  setupConteiner.appendChild(newWizard);
};

for (var i = 1; i <= OBJECTS_QUANTITY; i++) {
  createNewWizard(data[i - 1]);
}

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
