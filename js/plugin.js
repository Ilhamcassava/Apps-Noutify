const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");
const Button = document.querySelector(".btn");

const songs = [
  {
    title: "Kool Aid",
    name: "Bring Me The Horizon",
    source:
      "kool aid.mp3",
  },
  {
    title: "Gun Slinger",
    name: "Avenged Sevenfold",
    source:
      "gun slinger.mp3",
  },
  {
    title: "King Slayer",
    name: "Bring Me The Horizon Ft.Baby Metal",
    source:
      "WhatsApp Audio 2024-05-28 at 21.37.56.mp3",
  },
  {
    title: "Bring Me To Life",
    name: "Evanescence",
    source:
      "WhatsApp Audio 2024-05-31 at 22.16.50.mp3",
  },
  {
    title: "1-1",
    name: "Bring Me The Horizon Ft.Nova Twins",
    source:
      "nova twins.mp3",
  },

  {
    title: "Dear God",
    name: "Avenged Sevenfold",
    source:
      "dear god.mp3",
  },
  {
    title: "A Little Piece Of Heaven",
    name: "Avenged Sevenfold",
    source:
      "a little piece.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});



updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});

// Inspiration: https://dribbble.com/shots/5455156-Car-HMI-assistant-Album-switching
