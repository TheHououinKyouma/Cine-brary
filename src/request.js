const Api_key = "cabb87c8153e5b29cd062e923e51506c";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${Api_key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${Api_key}&with_newtworks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${Api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${Api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
};
export default requests;
