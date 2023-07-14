
const BASE_URL= "https://api.themoviedb.org"

const TMDB_VERSION = "3"

export const ROUTES = {
    fetchPopularMovies : `${BASE_URL}/${TMDB_VERSION}/popular?language=en-US&page=1`,
    fetchUpComingMovies : `${BASE_URL}/${TMDB_VERSION}/upcoming?language=en-US&page=1`,
    fetchLatestMovies:`${BASE_URL}/${TMDB_VERSION}/movie/latest`,
    searchByName: `${BASE_URL}/${TMDB_VERSION}/search/movie?include_adult=false&language=en-US&page=1`,
    fetchAllByName: `${BASE_URL}/${TMDB_VERSION}/search/multi?include_adult=false&language=en-US&page=1`,
    fetchTrendingMovies : `${BASE_URL}/${TMDB_VERSION}/trending/movie/day?language=en-US`,
    fetchTrendings: `${BASE_URL}/${TMDB_VERSION}/trending/all/day?language=en-US`
}

export const IMAGE_BASE_URL = `http://image.tmdb.org/t/p/w500`

