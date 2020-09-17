let fetchButton = document.querySelector('.fetch-button');

fetchButton.addEventListener('click', () => {
  import('./modules/json-fetch-request.js').then((Module) => {
    let jsonFetchRequest = new Module.JSONFetchRequest('https://raw.githubusercontent.com/regreaves/sturdy-disco/master/users');
  })
});
