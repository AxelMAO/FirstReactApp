// API/TMDBApi.js

const API_TOKEN = "2f1175c55eebdade96c958ceafa2458d";
//'https://api.themoviedb.org/3/movie/550?api_key=2f1175c55eebdade96c958ceafa2458d';

export async function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://api.themoviedb.org/3/movie/550?api_key=2f1175c55eebdade96c958ceafa2458d' + '&language=fr&query=' + text
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();  
  return data
  //return fetch(url)
  //  .then(response => response.json())
  //  .catch((error) => console.error(error))
}