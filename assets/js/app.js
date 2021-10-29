let inputShow = true;

function search() {
  toShowInput();
}

function toShowInput() {
  let input = document.querySelector("#inputSearch");
  let containerList = document.querySelector(".containerList");
  let pad = parseInt(containerList.style.paddingTop.replace("px", ""));
  let widthScreen = screen.width
  if (inputShow) {
    input.style.transform = "translateY(40px)";
    input.style.transition = ".3s";
    if(widthScreen > 480 && widthScreen <= 768){
      pad+=70
    }else{
      pad+= 50
    }
    containerList.style.paddingTop = pad + "px";
    containerList.style.transition = ".3s";
  } else {
    input.style.transform = "translateY(0)";
    if(widthScreen > 480 && widthScreen <= 768){
      containerList.style.paddingTop = "65px";
    }else{
      containerList.style.paddingTop = "50px";
    }
    input.style.transition = ".3s";
    containerList.style.transition = ".3s";
  }
  inputShow = !inputShow;
  input.value = "";
  console.log(containerList.style.paddingTop);
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
