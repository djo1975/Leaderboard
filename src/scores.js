import display from './display.js';

let submitClicked = false;

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const id = '36Y6GRRPRh6Va1JiGX77';

export const getScore = async () => {
  const userPost = await fetch(`${url}${id}/scores`, {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const users = await userPost.json();
  const sortedResults = users.result.sort((a, b) => b.score - a.score);
  display(sortedResults);
};

export const addScore = async (user, score) => {
  if (submitClicked) return;
  submitClicked = true;
  await fetch(`${url}${id}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  getScore();
  submitClicked = false;
};
