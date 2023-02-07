import display from './display.js';

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
  display(users.result);
};

export const addScore = async (user, score) => {
  const userPost = await fetch(`${url}${id}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const verification = await userPost.json();
  getScore();
  return verification;
};
