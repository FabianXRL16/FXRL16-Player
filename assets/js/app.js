// import init from './api';

// console.log(init)

let $modal = document.querySelector("#modal");
let $container = document.querySelector("#container");
let $closed = document.querySelector("#closed");

function toShowModal(inputShow) {
  if (inputShow) {
    $modal.style.transform = "scale(1)";
    $modal.style.transition = ".5s";
    $container.style.transform = "scale(0)";
    $container.style.transition = ".5s";
    $default.style.display = "block";
    $noResults.style.display = "none";
    $input.value = "";
    let $itemResult = document.querySelectorAll(".itemResult");
    if ($itemResult) {
      $itemResult.forEach((i) => $containerResults.removeChild(i));
    }
  } else {
    $modal.style.transform = "scale(0)";
    $modal.style.transition = ".5s";
    $container.style.transform = "scale(1)";
    $container.style.transition = ".5s";
    let $itemList = document.querySelectorAll(".itemList");
    if ($itemList) {
      $itemList.forEach((i) => $containerList.removeChild(i));
    }
    showPlayList(playList);
  }
}

$closed.addEventListener(
  "click",
  function () {
    toShowModal(false);
  },
  false
);

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

let playListAux = [
  {
    id: 1,
    img: "https://direct.rhapsody.com/imageserver/images/alb.61525160/600x600.jpg",
    title: "One More Night",
    singer: "Maroon 5",
  },

  {
    id: 2,
    img: "https://static.qobuz.com/images/covers/ra/gu/w4jwafymtgura_600.jpg",
    title: "Stay",
    singer: "Justin Bieber & The Kid Laroi",
  },
  {
    id: 3,
    img: "https://los40es00.epimg.net/los40/imagenes/2019/02/28/musica/1551370175_698722_1551370391_noticia_normal.jpg",
    title: "Sucker",
    singer: "Jonas Brothers",
  },
  {
    id: 4,
    img: "https://lastfm.freetls.fastly.net/i/u/300x300/c63984cd7a6f404bc0f4e1c3bc17e0c7.jpg",
    title: "Hasta la manyana",
    singer: "Elefante",
  },
  {
    id: 5,
    img: "https://direct.rhapsody.com/imageserver/images/alb.61525160/600x600.jpg",
    title: "One More Night",
    singer: "Maroon 5",
  },

  {
    id: 6,
    img: "https://static.qobuz.com/images/covers/ra/gu/w4jwafymtgura_600.jpg",
    title: "Stay",
    singer: "Justin Bieber & The Kid Laroi",
  },
  {
    id: 7,
    img: "https://los40es00.epimg.net/los40/imagenes/2019/02/28/musica/1551370175_698722_1551370391_noticia_normal.jpg",
    title: "Sucker",
    singer: "Jonas Brothers",
  },
  {
    id: 8,
    img: "https://lastfm.freetls.fastly.net/i/u/300x300/c63984cd7a6f404bc0f4e1c3bc17e0c7.jpg",
    title: "Hasta la manyana",
    singer: "Elefante",
  },
];

let $containerList = document.querySelector(".containerList");

function showPlayList(list) {
  let $withoutListMain = document.querySelector(".withoutListMain");
  if(list.length > 0){
    $withoutListMain.style.display = "none"
    list.map((item) => {
      let $btn = document.createElement("BUTTON");
      $btn.classList.add("itemList");
      let $img = document.createElement("DIV");
      $img.classList.add("img");
      $img.style.backgroundImage = `url(${item.img})`;
      let $title = document.createElement("DIV");
      $title.classList.add("title");
      let $h2 = document.createElement("H2");
      $h2.classList.add("titleSong");
      let $p = document.createElement("P");
      $p.classList.add("singer");
      let nameSong = document.createTextNode(item.title);
      let singer = document.createTextNode(item.singer);
      $h2.appendChild(nameSong);
      $p.appendChild(singer);
      $title.appendChild($h2);
      $title.appendChild($p);
      $btn.appendChild($img);
      $btn.appendChild($title);
      $btn.addEventListener("click", function () {
        listenSong(item.img);
      });
      $containerList.appendChild($btn);
    });
  }else{
    $withoutListMain.style.display = "block"
  }
}

function listenSong(img) {
  $body = document.querySelector("body");
  $body.style.backgroundImage = `url(${img})`;
}

let $containerResults = document.querySelector(".containerResults");

let playList = [];

function showResults(list) {
  list.map((item) => {
    let $item = document.createElement("DIV");
    $item.classList.add("itemResult");

    let $img = document.createElement("IMG");
    $img.src = item.img;

    let $title = document.createElement("DIV");
    $title.classList.add("titleResult");

    let $h2 = document.createElement("H2");
    let $p = document.createElement("P");

    let nameSong = document.createTextNode(item.title);
    let singer = document.createTextNode(item.singer);

    $h2.appendChild(nameSong);
    $p.appendChild(singer);

    $title.appendChild($h2);
    $title.appendChild($p);

    let $btn = document.createElement("BUTTON");
    let $icon = document.createElement("I");
    $icon.classList.add("fas");
    $icon.classList.add("fa-plus");
    $btn.appendChild($icon);

    $btn.addEventListener("click", function () {
      playList.push(item);
      showPlayListModal(playList);
      let empyList = document.querySelector(".withoutList");
      empyList.style.transform = "scale(0)"
        empyList.style.transition = ".5s"
    });

    $item.appendChild($img);
    $item.appendChild($title);
    $item.appendChild($btn);
    $containerResults.appendChild($item);
  });
}

let $input = document.querySelector("#input");
let $default = document.querySelector(".default");
let $noResults = document.querySelector(".noResults");

function findSong(toSearch) {
  toSearch = toSearch.toLowerCase();
  return playListAux.filter((i) => i.singer.toLowerCase().includes(toSearch));
}

$input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    search();
  }
});

let results = [];

function search() {
  try {
    let inputValue = $input.value;
    if (inputValue) {
      results = [];
      let $itemResult = document.querySelectorAll(".itemResult");
      if ($itemResult) {
        $itemResult.forEach((i) => $containerResults.removeChild(i));
      }
      $default.style.display = "none";
      $noResults.style.display = "none";
      results = findSong(inputValue);
      if (results.length === 0) {
        $noResults.style.display = "block";
      } else {
        showResults(results);
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    $input.value = "";
  }
}

/// ya no la estoy usando
function noResult() {
  let $item = document.createElement("DIV");
  $item.classList.add("noResults");

  let $icon = document.createElement("I");
  let $p = document.createElement("P");

  $icon.classList.add("far");
  $icon.classList.add("fa-dizzy");

  let msg = document.createTextNode("without results");

  $p.appendChild(msg);

  $item.appendChild($icon);
  $item.appendChild($p);
  $containerResults.appendChild($item);
}

let $containerSongs = document.querySelector(".containerSongs");

function showPlayListModal(list) {
  let $itemSong = document.querySelectorAll(".itemSong");
  if ($itemSong) {
    $itemSong.forEach((i) => $containerSongs.removeChild(i));
  }
  list.map((item, i) => {
    let $div = document.createElement("DIV");
    $div.classList.add("itemSong");

    let $img = document.createElement("DIV");
    $img.classList.add("itemImg");
    $img.style.backgroundImage = `url(${item.img})`;

    let $title = document.createElement("DIV");
    $title.classList.add("titleSong");

    let $h2 = document.createElement("H2");
    let $p = document.createElement("P");

    let nameSong = document.createTextNode(item.title);
    let singer = document.createTextNode(item.singer);

    $h2.appendChild(nameSong);
    $p.appendChild(singer);

    $title.appendChild($h2);
    $title.appendChild($p);

    $btn = document.createElement("BUTTON");
    $icon = document.createElement("I");
    $icon.classList.add("fas");
    $icon.classList.add("fa-minus");

    $btn.appendChild($icon);
    $btn.addEventListener("click", function () {
      playList.splice(i, 1);
      let empyList = document.querySelector(".withoutList");
      if (playList.length === 0) {
        empyList.style.transform = "scale(1)"
        empyList.style.transition = ".5s"
      } else {
        empyList.style.transform = "scale(0)"
        empyList.style.transition = ".5s"
      }
      showPlayListModal(playList);
    });

    $div.appendChild($img);
    $div.appendChild($title);
    $div.appendChild($btn);
    $containerSongs.appendChild($div);
  });
}
