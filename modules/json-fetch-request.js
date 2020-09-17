class JSONFetchRequest {
  constructor(resource) {
    this.resource = resource;
  }

  fetchJSONFile() {
    fetch(resource)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('Error:', err));
  }
}

export { JSONFetchRequest };
