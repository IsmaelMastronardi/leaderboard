import './style.css';

// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'my new game',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
// // Exito
//   .then((response) => response.json()) // convertir a json
//   .then((json) => console.log(json)) // imprimir los datos en la consola
//   .catch((err) => console.log('Solicitud fallida', err)); // Capturar errores

const scoreList = document.querySelector('#gameScoreList');
const fName = document.querySelector('#fName');
const fScore = document.querySelector('#fScore');
const fButton = document.querySelector('#fButton');

const display = (arr) => {
  arr.result.forEach((element) => console.log(element));
};
const refreshScores = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/37eiexTkKSur5UWYeeYT/scores/')
    .then((response) => response.json())
    .then((json) => display(json));
};

const submitScore = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/37eiexTkKSur5UWYeeYT/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: fName.value,
      score: fScore.value,
      // user: 'oli',
      // score: 50,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then(() => refreshScores());
};
fButton.addEventListener('click', submitScore);