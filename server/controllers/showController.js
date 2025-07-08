import axios from "axios"
import Movie from "../models/Movie.js";

//1. API to get now playing movies from TMDB API.
export const getNowPlayingMovies = async (req,res) => {
  try{
    const {data} = await axios.get('https://api.themoviedb.org/3/movie/now_playing',{ //using this we get the playing movie from tmdb data base online.
      headers : {Authorization : `Bearer ${process.env.TMDB_API_KEY}`}
    })
    const movies = data.results;
    res.json({success : true , movies : movies})
  }catch(error){
    console.log(error);
    res.json({success : false , message: error.message})
  }
}

//2. API to add a new show to the database.
export const addShow = async (req, res) => {
try{
  const {movieId , showsInput , showPrince} = req.body;

  let movie = await Movie.findById(movieId); // if the movie is awailabel in db then fetch otherwise it get from TMDB

  if(!movie){
    //Fetch movie details and credits from TMDB API.
    const [movieDetailsResponse, movieCreditsResponse] = await Promise.all([
      //get the movie details from TMBD to store in our data base.
      axios.get(`https://api.themoviedb.org/3/movie/${movieId}`,{ 
      headers : {Authorization : `Bearer ${process.env.TMDB_API_KEY}`}
    }),
    // get the casts details from TMBD (this apis is inbuilt in TMDB)
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`,{
      headers : {Authorization : `Bearer ${process.env.TMDB_API_KEY}`}
    })
    ]);
    const movieApiData = movieDetailsResponse.data;
    const movieCreditsData = movieCreditsResponse.data;

    const movieDetails = {
      
    }
   }
}catch(error){
  console.log(error);
    res.json({success : false , message: error.message})
}
}