let inputShow = true;

function search(){
    toShowInput()
}

function toShowInput() {
  //   let input = document.querySelector("#inputSearch");
  //   let containerList = document.querySelector(".containerList");
  //   let padList = containerList.style.paddingTop
  // if (inputShow) {
  //   input.style.transform = "translateY(40px)";
  //   input.style.transition = ".3s";
  //   containerList.style.paddingTop = `${padList+50}px`;
  //   containerList.style.transition = ".3s";
  // } else {
  //   input.style.transform = "translateY(0)";
  //   input.style.transition = ".3s";

  //   containerList.style.paddingTop = `${padList+100}px`;
  //   containerList.style.transition = ".3s";
  // }
  // inputShow = !inputShow
  // input.value = ""
}

let $video = document.querySelector('video');
let $play = document.querySelector('#play');
let $pause = document.querySelector('#pause');

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay(){
  $video.play()
  $play.hidden = true
  $pause.hidden = false
}

function handlePause(){
  $video.pause()
  $pause.hidden = true
  $play.hidden = false
}
