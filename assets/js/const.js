let $modal = document.querySelector("#modal");
let $container = document.querySelector("#container");
let $closed = document.querySelector("#closed");

let $btnOpenModal = document.querySelector("#btnOpenModal")
let $btnSearch = document.querySelector("#btnSearch")

let $video = document.querySelector("video");
let $play = document.querySelector("#play");
let $pause = document.querySelector("#pause");

let $input = document.querySelector("#input");
let $default = document.querySelector(".default");
let $noResults = document.querySelector(".noResults");

let $containerList = document.querySelector(".containerList");

let $containerResults = document.querySelector(".containerResults");

let $containerSongs = document.querySelector(".containerSongs");

let results = [];

let playList = [];

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

export {
  $modal,
  $container,
  $closed,
  $btnOpenModal,
  $btnSearch,
  $video,
  $play,
  $pause,
  $input,
  $default,
  $noResults,
  $containerList,
  $containerResults,
  $containerSongs,
  results,
  playList,
  playListAux,
};
