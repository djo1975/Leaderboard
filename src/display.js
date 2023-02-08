const displayScores = (scores) => {
  const scoresList = document.getElementById('scores-list');
  scoresList.innerHTML = '';
  let counter = 1;

  scores.forEach((score) => {
    const item = document.createElement('li');
    item.innerHTML = `${counter}. ${score.user}: ${score.score}`;
    scoresList.appendChild(item);
    counter += 1;
  });
};

export default displayScores;
