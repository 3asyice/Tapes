const audios = {
  audio1: document.getElementById('audio1'),
  audio2: document.getElementById('audio2'),
  audio3: document.getElementById('audio3'),
  audio4: document.getElementById('audio4'),
  audio5: document.getElementById('audio5'),
  audio6: document.getElementById('audio6'),
  audio7: document.getElementById('audio7'),
  audio8: document.getElementById('audio8'),
  audio9: document.getElementById('audio9'),
  audioA: document.getElementById('audioA'),
  audioB: document.getElementById('audioB'),
  audioC: document.getElementById('audioC'),
  audioD: document.getElementById('audioD'),
  audioE: document.getElementById('audioE'),
  audioF: document.getElementById('audioF'),
  audio00: document.getElementById('audio00'),
  audio01: document.getElementById('audio01'),
  audio02: document.getElementById('audio02')
};

// Função para tocar e parar o áudio
const controlAudio = (audioId, action) => {
  const audio = audios[audioId];
  if (action === 'play') {
    // Pausa os outros áudios
    for (const key in audios) {
      if (key !== audioId) {
        audios[key].pause();
      }
    }
    audio.play();
  } else if (action === 'stop') {
    audio.pause();
  }
};

// Adiciona ouvintes de eventos para as áreas clicáveis
document.querySelectorAll('area').forEach(area => {
  area.addEventListener('click', () => {
    const audioId = area.dataset.audio;
    const action = area.dataset.action || 'play';
    controlAudio(audioId, action);
  });
});

// Função para tocar o próximo áudio
const playNextAudio = (currentAudioId) => {
  const audioKeys = Object.keys(audios);
  const currentIndex = audioKeys.indexOf(currentAudioId);
  const nextIndex = (currentIndex + 1) % audioKeys.length; // Volta para o início após o último áudio
  const nextAudioId = audioKeys[nextIndex];
  controlAudio(nextAudioId, 'play');
};

// Adiciona ouvintes de eventos "ended" para cada áudio
for (const key in audios) {
  audios[key].addEventListener('ended', () => {
    playNextAudio(key);
  });
}