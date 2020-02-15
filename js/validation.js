'use strict';

(function () {
  var setupWizardForm = document.querySelector('.setup-wizard-form');
  var userNameInput = setupWizardForm.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function (evt) {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity(
        'Имя должно состоять не менее, чем из 2-х символов'
      );
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity(
        'Имя должно состоять не более, чем из 25-ти символов'
      );
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });
})();
