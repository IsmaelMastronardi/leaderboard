import './style.css';

const myId = 'eTp1wZzwkSLFf86ks2kWD';
// eslint-disable-next-line prefer-template
const myUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/' + myId + '/scores/';

const scoreList = document.querySelector('#gameScoreList');
const fName = document.querySelector('#fName');
const fScore = document.querySelector('#fScore');
const fButton = document.querySelector('#fButton');
const refreshBtn = document.querySelector('#refreshBtn')

const clearList = () => {
  while (scoreList.firstChild) {
    scoreList.removeChild(scoreList.firstChild);
  }
};

const display = (arr) => {
  clearList();
  const newArr = arr.result.sort((a, b) => a.score - b.score);
  console.log(newArr);
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

const refreshScores = async () => {
  const response = await fetch(myUrl);
  const json = await response.json();
  if (json) {
    display(json);
  }
};

const submitScore = async () => {
  await fetch(myUrl, {
    method: 'POST',
    body: JSON.stringify({
      user: fName.value,
      score: fScore.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

};

fButton.addEventListener('click', submitScore);
refreshBtn.addEventListener('click', refreshScores);