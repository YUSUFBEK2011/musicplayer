const musicsData = [
  {
    name: "Atirgullar ochdi Chiroy",
    rasmi: "./img/bahor.jpg",
    singer: "Jasur Jabborov",
    music: "./music/bahor.mp3",
  },
  {
    name: "Baby shark",
    rasmi: "./img/baby.jpg",
    singer: "English Music",
    music: "./music/Baby-Shark.m4a",
  },
  {
    name: "English song",
    rasmi: "./img/music.jpg",
    singer: "Pop Music",
    music: "./music/music 1.m4a",
  },
];
let curentIndex = 0;

const rasm = document.getElementById("rasm");
const nomi = document.getElementById("nomi");
const singer = document.getElementById("singer");
const select = document.getElementById("select");
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const next = document.getElementById("next");
const audio = document.getElementById("audio");

function getMusics() {
  select.innerHTML = '';
  musicsData.forEach((e, i) => {
    const Option = document.createElement("option");
    Option.textContent = e.singer + " : " + e.name;
    Option.value =i;
    select.appendChild(Option);

  })



}


getMusics()


function changeMusic() {
  rasm.src = musicsData[curentIndex].rasmi;
  nomi.textContent = musicsData[curentIndex].name;
  singer.textContent = musicsData[curentIndex].singer;

  audio.src = musicsData[curentIndex].music;
}

select.addEventListener("change", () => {
  curentIndex = +select.value;
  changeMusic();
  audio.src = musicsData[curentIndex].music;
})

function playAudio(){
  play.style.display="none";
  pause.style.display="block";
  audio.play();
}

function pauseAudio(){
  play.style.display="block";
  pause.style.display="none";
  audio.pause();
};

play.addEventListener("click",() => {
  playAudio();
});

pause.addEventListener("click",() => {
  pauseAudio();
});

next.addEventListener("click", () => {
  curentIndex=(curentIndex+1%musicsData)
})