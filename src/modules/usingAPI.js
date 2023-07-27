// const scoreList = document.querySelector('#gameScoreList');
const fName = document.querySelector('#fName');
const fScore = document.querySelector('#fScore');
const scoreListHolder = document.querySelector('#scoreListHolder');
const scoreList = document.createElement('ul');
scoreList.classList.add('scoreList');
const myId = 'eTp1wZzwkSLFf86ks2kWD';
// eslint-disable-next-line prefer-template
const myUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/' + myId + '/scores/';
const clearList = () => {
  while (scoreList.firstChild) {
    scoreList.removeChild(scoreList.firstChild);
  }
};
const display = (arr) => {
  clearList();
  scoreListHolder.removeChild(scoreListHolder.firstChild);
  const newArr = arr.result;
  newArr.forEach((elem) => {
    elem.score = parseInt(elem.score, 10);
  });
  const sortedArr = newArr.reverse(newArr.sort((a, b) => a.score - b.score));
  sortedArr.forEach((elem) => {
    const newItem = document.createElement('li');
    newItem.textContent = `${elem.user} : ${elem.score}`;
    scoreList.appendChild(newItem);
    const i = newArr.indexOf(elem);
    newItem.classList.add('scoreItem');
    switch (i) {
      case 0:
        newItem.classList.add('firstPlace');
        break;
      case 1:
        newItem.classList.add('secondPlace');
        break;
      case 2:
        newItem.classList.add('thirdPlace');
        break;
      default:
        newItem.classList.add('whiteItem');
    }
  });
  scoreListHolder.appendChild(scoreList);
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

export { refreshScores, submitScore };