'use strict';

(function () {
  var setupConteiner = document.querySelector('.setup-similar-list');
  var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content;
  var newWizardTemplate = wizardTemplate.querySelector('.setup-similar-item');

  var createNewWizard = function (wizardData) {
    var newWizard = newWizardTemplate.cloneNode(true);
    var newWizardName = newWizard.querySelector('.setup-similar-label');
    newWizardName.textContent = wizardData.name;
    var newWizardCoat = newWizard.querySelector('.wizard-coat');
    newWizardCoat.style.fill = wizardData.coatColor;

    setupConteiner.appendChild(newWizard);
  };

  for (var i = 1; i <= window.consts.OBJECTS_QUANTITY; i++) {
    var data = window.creationData.get();
    createNewWizard(data[i - 1]);
  }

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
})();
