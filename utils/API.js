const url = 'http://localhost:3000';

const getFurniture = (resolve, reject) => {
  setTimeout(function () {
    fetch(url + '/furniture')
      .then(response => response.json())//verciam i objekta
      .then(resolve)
      .catch(reject);
  }, 1000)
}

// fetch(url + '/furniture')
//   .then(response => response.json())
//   .then(data => console.log(data));

const deleteFurniture = (resolve, reject, id) => {
  fetch(url + '/furniture/' + id, { method: 'DELETE' })
    .then(resolve)
    .catch(reject);
}

// testId = 1;
// let deleted = fetch(url + '/furniture/' + testId, { method: 'DELETE' });

// fetch(url + '/furniture')
//   .then(response => response.json())
//   .then(data => console.log(data));

const API = {
  getFurniture,
  deleteFurniture
};

