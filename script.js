const songs = [
    { title: "Hey Minnale - Amaran", src: "song1.mp3", cover: "cover1.jpg" },
    { title: "Golden Sparrow - NEEK or Nilavuku En Mel Ennadi Kobam ", src: "song2.mp3", cover: "cover2.jpg" },
    { title: "Chillanjirukkiye - Lubber Pandhu", src: "song3.mp3", cover: "cover3.jpg" },
    { title: "Aathi - Kaththi", src: "song4.mp3", cover: "cover4.jpg" },
    { title: "Senjitaley - Remo", src: "song5.mp3", cover: "cover5.jpg" },
    { title: "Kadhal Cricket - Thani Oruvan", src: "song6.mp3", cover: "cover6.jpg" },
    { title: "Vennilavu Saaral - Amaran", src: "song7.mp3", cover: "cover7.jpg" },
    { title: "Dheema - Love Insurance Kompany", src: "song8.mp3", cover: "cover8.jpg" },
    { title: "Chinna Chinna Kangal - GOAT", src: "song9.mp3", cover: "cover9.jpg" },
    { title: "Naa Ready - LEO", src: "song10.mp3", cover: "cover10.jpg" }
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const title = document.getElementById("title");
const progress = document.getElementById("progress");
const volumeDisplay = document.getElementById("volume-display");
const cover = document.getElementById("cover");

audio.src = songs[currentSongIndex].src;
title.textContent = songs[currentSongIndex].title;
cover.src = songs[currentSongIndex].cover;

// Play/Pause Functionality
function playPauseSong() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = "⏸️";
    } else {
        audio.pause();
        playButton.textContent = "▶️";
    }
}

// Next Song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
    audio.play();
    playButton.textContent = "⏸️";
}

// Previous Song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
    playButton.textContent = "⏸️";
}

// Load song
function loadSong() {
    audio.src = songs[currentSongIndex].src;
    title.textContent = songs[currentSongIndex].title;
    cover.src = songs[currentSongIndex].cover;
}

// Update progress bar
audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.value = progressPercent;
    }
});

// Set progress bar
progress.addEventListener("input", () => {
    audio.currentTime = (progress.value * audio.duration) / 100;
});

// Set volume and display volume
function setVolume(value) {
    audio.volume = value / 100;
    volumeDisplay.textContent = `Volume: ${value}%`;
}
