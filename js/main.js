import { mySwiper } from './slider/slider.js';
mySwiper;

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const modal = () => {
    const modal = document.querySelector('.modal');
    const btnSignUp = document.querySelector('.btn-sign_up');

    /*  const modalCall = document.querySelector('.modal-call');
     const btnCall = document.querySelector('.btn-call'); */

    /*  const cardDetailsTitle = document.querySelector('.card-details__title'); */
    /* const modalTitle = modal.querySelector('.modal__title');
    const modalSubtitle = modal.querySelector('.modal__subtitle'); */

    const openModal = (event) => {
      const target = event.target;
      modal.classList.add('open');
      document.addEventListener('keydown', escapeHandler);
      /* modalTitle.textContent = cardDetailsTitle.textContent;
      modalSubtitle.textContent = target.dataset.buttonBuy; */
    };

    const closeModal = () => {
      modal.classList.remove('open');

      document.removeEventListener('keydown', escapeHandler);
    };

    const escapeHandler = (event) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };

    modal.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('modal__close') || target === modal) {
        closeModal();
      }
    });

    btnSignUp.addEventListener('click', openModal);
  };

  const modalCall = () => {
    const modalCall = document.querySelector('.modal-call');
    const btnCall = document.querySelector('.btn-call');

    console.log(modalCall);
    console.log(btnCall);

    const openModal = () => {
      modalCall.classList.add('open');
      document.addEventListener('keydown', escapeHandler);
    };

    const closeModal = () => {
      modalCall.classList.remove('open');
      document.removeEventListener('keydown', escapeHandler);
    };

    const escapeHandler = (event) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };

    modalCall.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('modal__close') || target === modalCall) {
        closeModal();
      }
    });
    btnCall.addEventListener('click', openModal);
  };

  const modalReview = () => {
    const modalReview = document.querySelector('.modal-review');
    const btnReview = document.querySelector('.btn-review');

    console.log(modalReview);
    console.log(btnReview);

    const openModal = () => {
      modalReview.classList.add('open');
      document.addEventListener('keydown', escapeHandler);
    };

    const closeModal = () => {
      modalReview.classList.remove('open');
      document.removeEventListener('keydown', escapeHandler);
    };

    const escapeHandler = (event) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };

    modalReview.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('modal__close') || target === modalReview) {
        closeModal();
      }
    });
    btnReview.addEventListener('click', openModal);
  };



  modal();
  modalCall();
  modalReview();
});

