// import init from './api';

// console.log(init)

// function moveNameSong(){
//   let widthScreen = screen.width
//   let $text = document.querySelector('.nameSong')
//   let textValue = $text.innerText
//   if(widthScreen < 480 && textValue.length > 20){
//     console.log("mobile")
//   }else if(widthScreen > 480 && widthScreen <= 768 && textValue.length > 70){
//     console.log("tablet")
//   }else if(widthScreen > 768 && textValue.length > 100){
//     console.log("desktop")
//   }
// } 
// moveNameSong()

let inputShow = true;

function search() {
  if($input.value){
    console.log($input.value)
    setTimeout(toShowInput,1000)
  }else{
    toShowInput();
  }
}

let $input = document.querySelector('#inputSearch');

$input.addEventListener('keyup', (e)=>{
  if(e.keyCode === 13){
    toShowInput();
    moveNameSong()
  }
})

function toShowInput() {
  let $containerList = document.querySelector(".containerList");
  let pad = parseInt($containerList.style.paddingTop.replace("px", ""));
  let widthScreen = screen.width;
  if (inputShow) {
    $input.style.transform = "translateY(40px)";
    $input.style.transition = ".3s";
    if (widthScreen > 480 && widthScreen <= 768) {
      pad += 70;
    } else {
      pad += 50;
    }
    $containerList.style.paddingTop = pad + "px";
    $containerList.style.transition = ".3s";
  } else {
    $input.style.transform = "translateY(0)";
    if (widthScreen > 480 && widthScreen <= 768) {
      $containerList.style.paddingTop = "65px";
    } else {
      $containerList.style.paddingTop = "50px";
    }
    $input.style.transition = ".3s";
    $containerList.style.transition = ".3s";
  }
  inputShow = !inputShow;
  $input.value = "";
}

let $video = document.querySelector("video");
let $play = document.querySelector("#play");
let $pause = document.querySelector("#pause");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}

function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
}

let playList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
