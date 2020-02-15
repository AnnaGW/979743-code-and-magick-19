'use strict';

(function () {
  var userWizard = document.querySelector('.setup-player');

  var userWizardCoat = userWizard.querySelector('.wizard-coat');
  var userWizardCoatInputValue = userWizard.querySelector('#coat-color');
  var userWizardEyes = userWizard.querySelector('.wizard-eyes');
  var userWizardEyesInputValue = userWizard.querySelector('#eyes-color');
  var userWizardFireball = userWizard.querySelector('.setup-fireball-wrap');
  var userWizardFireballInputValue = userWizard.querySelector(
      '#fireball-color'
  );

  var changeColorOnClick = function (element, elementInputValue, colorArray) {
    element.style.fill = window.util.selectRandomFromArray(colorArray);
    elementInputValue.value = element.style.fill;
  };

  var changeColorFireballOnClick = function (
      element,
      elementInputValue,
      colorArray
  ) {
    var fireballColor = window.util.selectRandomFromArray(colorArray);
    element.style.backgroundColor = fireballColor;
    elementInputValue.value = fireballColor;
  };

  userWizardCoat.addEventListener('click', function () {
    changeColorOnClick(
        userWizardCoat,
        userWizardCoatInputValue,
        window.consts.COAT_COLORS
    );
  });

  userWizardEyes.addEventListener('click', function () {
    changeColorOnClick(
        userWizardEyes,
        userWizardEyesInputValue,
        window.consts.EYES_COLORS
    );
  });

  userWizardFireball.addEventListener('click', function () {
    changeColorFireballOnClick(
        userWizardFireball,
        userWizardFireballInputValue,
        window.consts.FIREBALL_COLORS
    );
  });
})();
