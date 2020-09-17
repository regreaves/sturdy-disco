class JSONFetchRequest {
  constructor() {
    //this.resource = resource;
  }

  fetchJSONFile(resource) {
    fetch(resource)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('Error:', err));
  }
}

export { JSONFetchRequest };
