// API/TMDBApi.js

const API_TOKEN = "2f1175c55eebdade96c958ceafa2458d";

export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://api.themoviedb.org/3/movie/550?api_key=2f1175c55eebdade96c958ceafa2458d'; //'https://api.themoviedb.org/3/search/movie/550?api_key=' + API_TOKEN  + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}