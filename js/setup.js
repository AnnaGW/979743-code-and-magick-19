'use strict';
// --------- open/close popup setup-----
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');

  var onPopupEscPress = function (evt) {
    if (evt.key === window.consts.ESC_KEY) {
      closePopup();
    }
  };

  var openPopup = function () {
    setup.style.top = '80px';
    setup.style.left = '50%';
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', openPopup);

  setupClose.addEventListener('click', closePopup);

  document.addEventListener('keydown', function (evt) {
    if (evt.key === window.consts.ENTER_KEY && evt.target === setupOpenIcon) {
      openPopup();
    }
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.consts.ENTER_KEY) {
      closePopup();
    }
  });
})();
