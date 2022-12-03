import Notiflix from 'notiflix';

function createPromise(index, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res({ index, delay });
      } else {
        rej({ index, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', onBtnClick);

function onBtnClick(form) {
  form.preventDefault();
  let delay = Number(form.currentTarget.delay.value);
  let step = Number(form.currentTarget.step.value);
  let amount = Number(form.currentTarget.amount.value);

  for (let index = 0; index < amount; index += 1) {
    createPromise(index + 1, delay)
      .then(({ index, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${index} in ${delay}ms`);
      })
      .catch(({ index, delay }) => {
        Notiflix.Notify.warning(`❌ Rejected promise ${index} in ${delay}ms`);
      });
    delay += step;
  }
}
