const KEY = "AIzaSyAlTAWqXWSEkSrKP6lrV2y07DGyx3Vtug8";
const API = "https://youtube.googleapis.com/youtube/v3/search";
const PARAMS = "&type=video&part=snippet&maxResults=";
const MAX_RESULTS = 3;

export default async function init(findMusic = "fxrl16") {
  try {
    let url = `${API}?key=${KEY}${PARAMS}${MAX_RESULTS}&q=${findMusic}`;
    const data = await (await fetch(url)).json();
    let items = data.items;
    return items;
  } catch (error) {
    console.error(error);
  }
}
