const API_KEY='5d05fd6f862a7cfda47f25595b544fad';

const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchRomanticMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    getMoiveTrailers:`/videos?api_key=${API_KEY}`
}


export default requests;

