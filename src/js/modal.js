(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
     closeModalLink: document.querySelector('[burger-menu-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalLink.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open')
    refs.modal.classList.toggle('is-hidden');
  }
})();


