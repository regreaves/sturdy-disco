let fetchInput = document.getElementById('fetch-input');
let resource = fetchInput.value;
let fetchButton = document.querySelector('.fetch-button');

fetchButton.addEventListener('click', () => {
  import('./modules/json-fetch-request.js').then((Module) => {
    let jsonFetchRequest = new Module.JSONFetchRequest(resource);
    jsonFetchRequest.fetchJSONFile();
  })
});
