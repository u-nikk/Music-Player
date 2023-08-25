console.log("Welcome to spotify");
// Initialize the variables
let = songIndex = 0;
let songElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let songs = [
    { songName: "Legion", filePath: "song/1.mp3", coverPath: "covers/1.jpg" }
    { songName: "Legion", filePath: "song/1.mp3", coverPath: "covers/1.jpg" }
    { songName: "Legion", filePath: "song/1.mp3", coverPath: "covers/1.jpg" }
    {songName: "Legion", filePath: "song/1.mp3", coverPath: "covers/1.jpg" }
    {songName: "Legion", filePath: "song/1.mp3", coverPath: "covers/1.jpg" }
]
let audioElement = new Audio(mp3.mp3);
// audioElement.play();

//handle Play/PAuse click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
    }
})

// Listen to Events
myProgressBar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update SeekBar


})
