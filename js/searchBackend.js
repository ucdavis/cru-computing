function initSearch(link, categories) {
  function loadBackend(link) {
    return fetch(new Request(link))
        .then((response) => response.json())
        .then((json) => {
          for(let title in json) {
            if(!categories.includes(json[title].category)) {
              delete json[title]
            }
          }

          return json
        });
  }

  function getLunrBuilder() {
    return new Promise((resolve, reject) => {
      window.addEventListener('DOMContentLoaded', () => {
        elasticlunr.clearStopWords();
        let builder = elasticlunr(function(){
          this.setRef('title')
          this.addField('description')
          this.addField('author')
          this.addField('title')
        })
        resolve(builder);
      })
    });
  }

  return Promise.all([loadBackend(link), getLunrBuilder()]).then(([data, builder]) => {
    Object.values(data).forEach(builder.addDoc.bind(builder));
    return builder
  })
}