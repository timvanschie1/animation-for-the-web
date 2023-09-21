const section = document.querySelector('section');
const video = document.querySelector('video');
const audio = document.querySelector('audio');

video.pause();

function scroll() {
  const audioIsPlaying = audio.duration > 0 && !audio.paused;
  if (!audioIsPlaying) {
    audio.play();
  }

  const distance = window.scrollY - section.offsetTop;
  const total = section.clientHeight - window.innerHeight;
  let percentage = distance / total;
  percentage = Math.max(0, percentage);
  percentage = Math.min(1, percentage);

  if (video.duration > 0) {
    video.currentTime = video.duration * percentage;
  }
}

scroll()
window.addEventListener('scroll', scroll);