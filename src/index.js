import './style.css';

fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  body: JSON.stringify({
    name: 'my new game',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log('Solicitud fallida', err));

const scoreList = document.querySelector('#gameScoreList');
const fName = document.querySelector('#fName');
const fScore = document.querySelector('#fScore');
const fButton = document.querySelector('#fButton');

const clearList = () => {
  while (scoreList.firstChild) {
    scoreList.removeChild(scoreList.firstChild);
  }
};

const display = (arr) => {
  clearList();
  const newArr = arr.result.sort((a, b) => a.score - b.score);
  newArr.forEach((elem) => {
    const newItem = document.createElement('li');
    newItem.textContent = elem.user + elem.score;
    scoreList.appendChild(newItem);
    const i = newArr.indexOf(elem);
    newItem.classList.add('scoreItem');
    if (i % 2 === 0) {
      newItem.classList.add('greyItem');
    }
  });
};
const refreshScores = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eTp1wZzwkSLFf86ks2kW /scores/')
    .then((response) => response.json())
    .then((json) => display(json));
};

const submitScore = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eTp1wZzwkSLFf86ks2kW /scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: fName.value,
      score: fScore.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => refreshScores());
};
fButton.addEventListener('click', submitScore);