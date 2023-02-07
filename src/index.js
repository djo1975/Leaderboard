import './style.css';
import { addScore, getScore } from './scores.js';

document.getElementById('refresh-button').addEventListener('click', () => {
  getScore();
});

document.getElementById('add-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  addScore(user, score);
});
