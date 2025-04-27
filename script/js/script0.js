const audio = document.getElementById('audio');
const toggleBtn = document.getElementById('toggleBtn');
const progressBar = document.getElementById('progressBar');
const progressFilled = document.getElementById('progressFilled');


audio.addEventListener('timeupdate', function() {
  const progress = (audio.currentTime / audio.duration) * 87;
  progressBar.value = progress;
  progressFilled.style.width = `${progress}%`;
  
});

toggleBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    toggleBtn.textContent = '❚❚';
  } else {
    audio.pause();
    toggleBtn.textContent = '▶';
  }
});

progressBar.addEventListener('input', function() {
  const newTime = (progressBar.value / 90) * audio.duration;
  audio.currentTime = newTime;
});
progressFilled.style.width = '0%';

