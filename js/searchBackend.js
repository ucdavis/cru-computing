function initSearch(link, categories, indexBuilder) {
  function loadBackend() {
    return fetch(new Request(link))
        .then((response) => response.json())
        .then((json) => {
          for(let title in json) {
            if(json[title].category && !categories.includes(json[title].category)) {
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
        let builder = elasticlunr(indexBuilder)
        resolve(builder);
      })
    });
  }

  return Promise.all([loadBackend(), getLunrBuilder()]).then(([data, builder]) => {
    Object.values(data).map((doc) => {
        Object.keys(doc).forEach((key) => {
          if(Array.isArray(doc[key])) {
            doc[key] = doc[key].join(" ")
          }
        })
        return doc;
      }
    ).forEach(builder.addDoc.bind(builder));
    return {
      searchData: data,
      index: builder
    }
  })
}