document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.room-card__button');
  const div = document.querySelector('.room-card__container');

  button.addEventListener('click', () => {
    if (div.classList.contains('room-card__container')) {
      div.classList.remove('room-card__container');
      div.classList.add('room-card__container--received');
    } else {
      div.classList.remove('room-card__container--received');
      div.classList.add('room-card__container');
    }
  });
});
