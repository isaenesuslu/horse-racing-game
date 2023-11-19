//* <----- MUSIC PLAY-PAUSE ----->
const audioPlayer = document.getElementById("audio-player");
const startStopButton = document.querySelectorAll(".start-stop");
const audioBtn = document.querySelectorAll(".audio-btn")

for (i=0; i<2; i++) {
  
  startStopButton[i].addEventListener("click", () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      // startStopButton[i].textContent = "Stop";
      for (j=0; j<2; j++) {
        audioBtn[j].src="./img/buttons/Sound.png"
      }

    } else {
      audioPlayer.pause();
      // startStopButton[i].textContent = "Start";
      for (j=0; j<2; j++) {
        audioBtn[j].src ="./img/buttons/SoundOff.png"
      }
    }
  });
}

//* <----- SELECTIONS ----->

let arrow = document.querySelectorAll(".welcome-arrow");

let mouseEnter = ()=>{
    arrow[0].style.display="block";
};
let mouseEnter2 = ()=>{
    arrow[1].style.display="block";
}; 
let mouseEnter3 = ()=>{
    arrow[2].style.display="block";
};
let mouseLeave = ()=>{
    arrow[0].style.display="none";
};
let mouseLeave2 = ()=>{
    arrow[1].style.display="none";
};
let mouseLeave3 = ()=>{
    arrow[2].style.display="none";
};

let creator = document.querySelector(".creator");

let creatorMenu = ()=>{
  clickEffect.play();
  creator.style.display="block";
};

let windowQuit1 = ()=> {
  creator.style.display="none";
};

let contact = document.querySelector(".contact");

let contactMenu = () =>{
  clickEffect.play()
  contact.style.display="block";
};

let windowQuit2 = ()=> {
  contact.style.display="none";
};

let Features = document.querySelector(".features");

const storeFunc = () =>{
  Features.style.display="block";
};

const annFunc = () =>{
  Features.style.display="block";
};

const leaderBoard = () =>{
  Features.style.display="block";
}

const windowQuit3 = () => {
  Features.style.display="none";
};

let playGame = document.querySelector(".game-welcome");

const playGameFunc = () =>{
  clickEffect.play();
  playGame.classList.remove("w-anim-back");
  playGame.classList.add("welcome-anim");
};

//* <----- GAME ----->

let clickEffect = document.querySelector(".click-effect");

let settings = document.querySelector(".settings");

const settingsFunc = () =>{
  settings.classList.remove("settings-leave-anim");
  settings.classList.add("settings-anim");
};

const settingsLeave = () =>{
  settings.classList.remove("settings-anim");
  settings.classList.add("settings-leave-anim");
};

let info = document.querySelector(".alert");

let infoFunc = () =>{
  clickEffect.play();
  info.classList.toggle("show");
};

//* <----- GAME MAIN ----->

var c1 = false;
var c2 = false;
var f = false;

let horse1 = document.querySelector(".horse-1");
let horse2 = document.querySelector(".horse-2");
let finishLine = document.querySelector(".finish-line");
lineLeft = finishLine.offsetLeft
playButton = document.querySelector(".play-button")
leaderboard = document.querySelector(".leaderboard")
whoWin = document.querySelector(".who-win")
gameFinish = document.querySelector(".game-finish")
cWarning = document.querySelector(".c-warning")

let c1Func = () =>{
  c1 = true;
  c2 = false;
  horse1.style.filter="drop-shadow(4px 8px 8px #ececec)";
  horse2.style.filter="none";
}

let c2Func = () =>{
  c2 = true;
  c1 = false;
  horse2.style.filter="drop-shadow(4px 8px 8px #ececec)";
  horse1.style.filter="none";
}

let gameStart = () =>{
  if(c1==true || c2==true) {
    horse1.style.pointerEvents="none";
    horse2.style.pointerEvents="none";
    playButton.style.pointerEvents="none"
    leaderboard.style.pointerEvents="none"
    playButton.src = "./img/buttons/Played.png"
    
    function moveHorses() {
      var interval = setInterval(function () {
        var randomNumber1 = Math.floor(Math.random() * 10 + 1);
        var randomNumber2 = Math.floor(Math.random() * 10 + 1);
        
        horse1.style.left = (parseInt(horse1.style.left || 0) + randomNumber1) + "px";
        horse2.style.left = (parseInt(horse2.style.left || 0) + randomNumber2) + "px";
        
        if (Math.abs(lineLeft - horse1.offsetLeft-100) <= 5) {
          clearInterval(interval);
          if (c1==true) {
            whoWin.innerText="YOU WON!";
            c1 = false;
          }else{
            whoWin.innerText="YOU LOSE :[";
            c2 = false;
          };
          f = true;
          gameFinish.classList.remove("finish-replay")
          gameFinish.classList.add("finish-anim");
        }
        else if (Math.abs(lineLeft - horse2.offsetLeft-100) <= 5) {
          clearInterval(interval);
          if (c2==true){
            whoWin.innerText="YOU WON!";
            c2 = false;
          }else{
            whoWin.innerText="YOU LOSE :[";
            c1 = false;
          };
          f = true;
          gameFinish.classList.remove("finish-replay")
          gameFinish.classList.add("finish-anim");
        }        
      }, 30);
    }
    moveHorses();
  }
  else if(c1==false && c2==false) {
    setTimeout(function() {
      cWarning.style.display="block"
    }, 10)

    setTimeout(function() {
      cWarning.style.display="none"
    }, 3000)
  }
};

let replay = () =>{
  if (f == true) {
  clickEffect.play()
  gameFinish.classList.remove("finish-anim")
  gameFinish.classList.add("finish-replay")
  horse1.style.filter="none";
  horse2.style.filter="none";
  horse1.style.left = "0";
  horse2.style.left = "0";
  horse1.style.pointerEvents ="all";
  horse2.style.pointerEvents ="all";
  playButton.style.pointerEvents="all"
  leaderboard.style.pointerEvents="all"
  playButton.src = "./img/buttons/Play.png"
  };
};
let homeFunc = () =>{
  if (f == true) {
  clickEffect.play();
  playGame.classList.remove("welcome-anim");
  playGame.classList.add("w-anim-back");
  gameFinish.classList.remove("finish-anim");
  gameFinish.classList.add("finish-replay");
  horse1.style.filter="none";
  horse2.style.filter="none";
  horse1.style.left = "0";
  horse2.style.left = "0";
  horse1.style.pointerEvents ="all";
  horse2.style.pointerEvents ="all";
  playButton.style.pointerEvents="all";
  leaderboard.style.pointerEvents="all";
  playButton.src = "./img/buttons/Play.png";
  f = false;
  }
  else if (f == false) {
    clickEffect.play();
    playGame.classList.remove("welcome-anim");
    playGame.classList.add("w-anim-back");
  };
};