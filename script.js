//declare variable using DOM
let trackImage = document.querySelector(".trackImage");
let trackName = document.querySelector(".trackName");
let trackArtist = document.querySelector(".trackArtist");
let audioTag = document.querySelector(".audioTag");
let playBtn = document.querySelector(".playBtn");
let pauseBtn = document.querySelector(".pauseBtn");
let totalDisplay = document.querySelector(".totalDisplay");
let currentDisplay = document.querySelector(".currentDisplay");
let currentTime = document.querySelector(".currentTime");
let count = 0;
let isPlay = false;
//create array
const songList = [
    {
        name : "Lose Yourself",
        artist : "Eminem",
        image : "./image/music1.jpg",
        path: "./music/music 1.mp3"
     },
     {
         name : "I Will Be Right Here Waiting For You",
         artist : "Richard Marx",
         image : "./image/music2.png",
         path: "./music/music 2.mp3"
      },
      {
         name : "Eeine_Meenie_",
         artist : "Sean Kingston,Justin Bieber",
         image : "./image/music3.jpg",
         path: "./music/music 3.mp3"
      },
    {
         name : "Sweet But Psycho",
         artist : "Ava Max",
         image : "./image/music2.png",
         path: "./music/music 4.mp3"
    },
    {
        name: "Point Of View",
        artist: "Nightcore",
        image: "./image/music1.jpg",
        path: "./music/music 5.mp3"
    },
    {
        name: "Limitless",
        artist: "SeVen.13",
        image: "./image/music2.png",
        path: "./music/music 6.mp3"
    },
    {
        name: "Love Yourself",
        artist: "Justin Bieber",
        image: "./image/music3.jpg",
        path: "./music/music 7.mp3"
    },
    {
        name: "What Make You Beautiful",
        artist: "One Direction",
        image: "./image/music3.jpg",
        path: "./music/music 8.mp3"
    },
    {
        name: "Faded",
        artist: "Alan Walker",
        image: "./image/music3.jpg",
        path: "./music/music 9.mp3"
    },
    {
        name: "Memories",
        artist: "Maroon5",
        image: "./image/music3.jpg",
        path: "./music/music 10.mp3"
    },
];
//start function
function start() {
    trackImage.style.backgroundImage = "url(" + songList[count].image + ")";
    trackName.textContent = songList[count].name;
    trackArtist.textContent = songList[count].artist;
    audioTag.src = songList[count].path;
};
//play function
function playSong() {
    audioTag.play();
    isPlay = true;
    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
};
//pause function
function pauseSong() {
    audioTag.pause();
    isPlay = false;
    playBtn.classList.remove("hidden");
    pauseBtn.classList.add("hidden");
};
//next function
function next() {
    if (count == 9) {
        return;
    };
    if (count < 10) {
        count++;
        start();
        if (isPlay) {
            audioTag.play();
        };
    };
    randomBgColor();
};
//previous function
function previous() {
    if (count > 0) {
        count--;
        start();
        if (isPlay) {
            audioTag.play();
        };
    };
    randomBgColor();
};
//display song time 
audioTag.addEventListener("loadeddata", function () {
    let totalDuration = Math.floor(audioTag.duration);
    let minutes = Math.floor(totalDuration / 60);
    let seconds = Math.floor(totalDuration % 60);
    totalDisplay.textContent =
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);

    audioTag.addEventListener("timeupdate", function () {
        let currentDuration = audioTag.currentTime;
        let minutes = Math.floor(currentDuration / 60);
        let seconds = Math.floor(currentDuration % 60);
        currentDisplay.textContent =
            (minutes < 10 ? "0" + minutes : minutes) + ":" +
            (seconds < 10 ? "0" + seconds : seconds);

        currentTime.style.width = (currentDuration / totalDuration) * 400 + "px";
    });
});
//radom background color function
function randomBgColor() {
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;

    let bgColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.background = bgColor;
};
//call start function
start();
