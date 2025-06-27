const chicken = document.getElementById('chicken');
const counter = document.getElementById('counter');
const reset = document.getElementById('reset');
const cluckSound = document.getElementById('cluckSound');

let count = 0;
let scale = 1;

const backgrounds = ['#fdf0d5', '#fce38a', '#e0bbe4', '#c1fba4', '#a0ced9'];

chicken.addEventListener('click', () => {
  count++;
  scale += 0.05;
  chicken.style.transform = `scale(${scale})`;
  counter.textContent = `Clucks: ${count}`;

  // Play cluck sound with slightly increased playback rate
  cluckSound.pause();
  cluckSound.currentTime = 0;
  cluckSound.playbackRate = 1 + count * 0.01;
  cluckSound.play();

  // Change background color every 10 clicks
  if (count % 10 === 0) {
    document.body.style.backgroundColor =
      backgrounds[Math.floor(Math.random() * backgrounds.length)];
  }
});

reset.addEventListener('click', () => {
  count = 0;
  scale = 1;
  chicken.style.transform = `scale(${scale})`;
  counter.textContent = `Clucks: ${count}`;
  document.body.style.backgroundColor = backgrounds[0];
});
