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

let playList = [
  {
    id: 1,
    img: "https://direct.rhapsody.com/imageserver/images/alb.61525160/600x600.jpg",
    title: "One More Night",
    singer: "Maroon 5"
  },

  {
    id: 2,
    img: "https://static.qobuz.com/images/covers/ra/gu/w4jwafymtgura_600.jpg",
    title: "Stay",
    singer: "Justin Bieber & The Kid Laroi"
  },
  {
    id: 3,
    img: "https://los40es00.epimg.net/los40/imagenes/2019/02/28/musica/1551370175_698722_1551370391_noticia_normal.jpg",
    title: "Sucker",
    singer: "Jonas Brothers"
  },
  {
    id: 4,
    img: "https://lastfm.freetls.fastly.net/i/u/300x300/c63984cd7a6f404bc0f4e1c3bc17e0c7.jpg",
    title: "Hasta la manyana",
    singer: "Elefante"
  }
]

function showPlayList(){
  let $container = document.querySelector('.containerList')
  playList.map(item => {
    let $btn = document.createElement("BUTTON")
    $btn.classList.add('itemList')
    let $img = document.createElement("DIV")
    $img.classList.add('img')
    $img.style.backgroundImage = `url(${item.img})`
    let $title = document.createElement("DIV")
    $title.classList.add('title')
    let $h2 = document.createElement("H2")
    $h2.classList.add('titleSong')
    let $p = document.createElement("P")
    $p.classList.add("singer")
    let nameSong = document.createTextNode(item.title)
    let singer = document.createTextNode(item.singer)
    $h2.appendChild(nameSong)
    $p.appendChild(singer)
    $title.appendChild($h2)
    $title.appendChild($p)
    $btn.appendChild($img)
    $btn.appendChild($title)
    $container.appendChild($btn)
  })

}

showPlayList()