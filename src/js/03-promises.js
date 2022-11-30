import Notiflix from 'notiflix';

const refsForm = document.querySelector('.form');

let firstDelay = null;
let stepDelay = null;
let amountInp = null;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      } 
      reject({ position, delay })
    }, delay);
  });
};

refsForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault(); 

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;
   
  firstDelay = Number(delay.value);
  stepDelay = Number(step.value);
  amountInp = Number(amount.value);

  for (let i = 1; i < amountInp; i += 1) {
    createPromise(i, firstDelay).then(onSuccess).catch(onError);         
    firstDelay += stepDelay;
  };  
  e.currentTarget.reset();
};

function onSuccess({ position, delay }) {
  console.log(`😀 Fulfilled promise ${position} in ${delay}ms`);
  Notiflix.Notify.success(`😀 Fulfilled promise ${position} in ${delay}ms`);
};
  
function onError({ position, delay }) {
  console.log(`😡 Rejected promise ${position} in ${delay}ms`);
  Notiflix.Notify.failure(`😡 Rejected promise ${position} in ${delay}ms`);
}; 