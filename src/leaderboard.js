import axios from 'axios';

const createGame = async () => {
  try {
    const res = await axios.post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      name: 'Mladans game',
    });

    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};

createGame();
