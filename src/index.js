import './style.css';
import { refreshScores, submitScore } from './modules/usingAPI.js';

const fButton = document.querySelector('#fButton');
const refreshBtn = document.querySelector('#refreshBtn');

fButton.addEventListener('click', submitScore);
refreshBtn.addEventListener('click', refreshScores);
window.onload = refreshScores();