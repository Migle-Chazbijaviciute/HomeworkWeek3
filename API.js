const url = 'http://localhost:3000';

const getFurniture = (resolve, reject) => {
  fetch(url + '/furniture')
    .then(response => response.json())//verciam i objekta
    .then(resolve)
    .catch(reject);
}

console.log();

const deleteFurniture = (resolve, reject, id) => {
  fetch(url + '/furniture/' + id, { method: 'DELETE' })
    .then(resolve)
    .catch(reject);
}

const API = {
  getFurniture,
  deleteFurniture
};


