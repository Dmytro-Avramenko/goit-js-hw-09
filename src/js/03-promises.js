import Notiflix from 'notiflix';

const refsForm = document.querySelector('.form');

refsForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let firstDelay = Number(refsForm.delay.value);
  let stepDelay = Number(refsForm.step.value);
  let positionAmount = Number(refsForm.amount.value);

  for (let i = 0; i < positionAmount; i += 1) {
    const totaldelay = firstDelay + i * stepDelay;
    createPromise(i, totaldelay);
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const canFulfill = Math.random() > 0.3;

    setTimeout(() => {
      if (canFulfill) {
        resolve('Succsess');
        
        console.log(`😀 Fulfilled promise ${position + 1} in ${delay}ms`);
        Notiflix.Notify.success(
          `😀Fulfilled promise ${position + 1} in ${delay}ms`
        );
      } else {
        reject('Error');

        console.log(`😡 Rejected promise ${position + 1} in ${delay}ms`);
        Notiflix.Notify.failure(
          `😡 Rejected promise ${position + 1} in ${delay}ms`
        );
      }
    }, delay);
  });
}