const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 2000)
});


myPromise
  .then((result) => console.log('result:', result))
  .catch((err => console.log('err:', err)));