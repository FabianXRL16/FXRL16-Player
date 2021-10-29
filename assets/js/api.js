
const KEY = 'AIzaSyAlTAWqXWSEkSrKP6lrV2y07DGyx3Vtug8';
const API = 'https://youtube.googleapis.com/youtube/v3/search';
const PARAMS = '&type=video&part=snippet&maxResults=';
const MAX_RESULTS = 3

let items = []

const init = async (url) => {
    try {
      const data = await (await fetch(url)).json();
      items = data.items
    } catch (error) {
      console.error(error);
    }
  };
  
  init(`${API}?key=${KEY}${PARAMS}${MAX_RESULTS}&q=fxrl16`);
