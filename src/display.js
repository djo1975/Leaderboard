export default function displayScores(scores) {
  const scoresList = document.getElementById('scores-list');
  scoresList.innerHTML = '';

  scores.forEach((score) => {
    const item = document.createElement('li');
    item.innerHTML = `${score.user}: ${score.score}`;
    scoresList.appendChild(item);
  });
}
