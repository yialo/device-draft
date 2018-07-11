var linkFeedback = document.querySelector('.feedback-link');
var modalFeedback = document.querySelector('.modal-feedback');
var modalFullName = modalFeedback.querySelector('.feedback-fullname');
var modalEmail = modalFeedback.querySelector('.feedback-email');
var modalMessage = modalFeedback.querySelector('.feedback-textarea');
var modalForm = modalFeedback.querySelector('.feedback-form');
var modalFeedbackClose = document.querySelector('.modal-feedback .modal-close-btn');

linkFeedback.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.add('modal-show');
  modalFullName.focus();
});

modalFeedbackClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modalFeedback.classList.remove('modal-show');
  modalFeedback.classList.remove('modal-error');
});

modalForm.addEventListener('submit', function(evt) {
  if (!modalFullName.value || !modalEmail.value || !modalMessage.value) {
    evt.preventDefault();
    modalFeedback.classList.remove('modal-error');
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add('modal-error');
  }
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains('modal-show')) {
      evt.preventDefault();
      modalFeedback.classList.remove('modal-show');
    }
  }
});
