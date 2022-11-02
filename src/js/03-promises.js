
formRef = document.querySelector('form'),
formRef.addEventListener('submit', onFormSubmit);
let resolvePromise = 0;
let rejectPromise = 0;

function onFormSubmit(evt) {
  evt.preventDefault();
  totalPromise(getInputValues(formRef.elements));
}

function getInputValues({ delay, step, amount }) {
  return { delay: Number(delay.value), step: Number(step.value), amount: Number(amount.value) };
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}     


function totalPromise({ delay, step, amount }) {
  for (let i = 0; i < amount; i += 1) {
      createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        resolvePromise += 1;
        console.log(`${ position }/${ amount }: ВЫПОЛНЕН №_${ resolvePromise } с задержкой ${ delay } ms`); 
      })
      .catch(({ position, delay }) => {
        rejectPromise += 1
        console.log(`${ position }/${ amount }: ОТКЛОНЕН №_${ rejectPromise } с задержкой ${ delay } ms`); 
        
      })
  }
}
