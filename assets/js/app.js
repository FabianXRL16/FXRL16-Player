// import init from './api';

// console.log(init)

let inputShow = true;

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
  },
  {
    id: 5,
    img: "https://direct.rhapsody.com/imageserver/images/alb.61525160/600x600.jpg",
    title: "One More Night",
    singer: "Maroon 5"
  },

  {
    id: 6,
    img: "https://static.qobuz.com/images/covers/ra/gu/w4jwafymtgura_600.jpg",
    title: "Stay",
    singer: "Justin Bieber & The Kid Laroi"
  },
  {
    id: 7,
    img: "https://los40es00.epimg.net/los40/imagenes/2019/02/28/musica/1551370175_698722_1551370391_noticia_normal.jpg",
    title: "Sucker",
    singer: "Jonas Brothers"
  },
  {
    id: 8,
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