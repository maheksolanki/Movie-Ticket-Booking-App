import axios from "axios";
import Movie from "../models/Movie.js";
import Show from "../models/Show.js";

//1. API to get now playing movies from TMDB API.
export const getNowPlayingMovies = async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        //using this we get the playing movie from tmdb data base online.
        headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}` },
      }
    );
    const movies = data.results;
    res.json({ success: true, movies: movies });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//2. API to add a new show to the database.
export const addShow = async (req, res) => {
  try {
    const { movieId, showsInput, showPrice } = req.body;

    let movie = await Movie.findById(movieId); // if the movie is awailabel in db then fetch otherwise it get from TMDB

    if (!movie) {
      //Fetch movie details and credits from TMDB API.
      const [movieDetailsResponse, movieCreditsResponse] = await Promise.all([
        //get the movie details from TMBD to store in our data base.
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}` },
        }),
        // get the casts details from TMBD (this apis is inbuilt in TMDB)
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
          headers: { Authorization: `Bearer ${process.env.TMDB_API_KEY}` },
        }),
      ]);
      const movieApiData = movieDetailsResponse.data;
      const movieCreditsData = movieCreditsResponse.data;

      const movieDetails = {
        _id: movieId,
        title: movieApiData.title,
        overview: movieApiData.overview,
        poster_path: movieApiData.poster_path,
        backdrop_path: movieApiData.backdrop_path,
        genres: movieApiData.genres,
        casts: movieCreditsData.cast,
        release_date: movieApiData.release_date,
        original_language: movieApiData.original_language,
        tagline: movieApiData.tagline || "",
        vote_average: movieApiData.vote_average,
        runtime: movieApiData.runtime,
      };

      //add movie to the data base
      movie = await Movie.create(movieDetails);
    }

    const showsToCreate = [];
    showsInput.forEach((show) => {
      const showDate = show.date;
      show.time.forEach((time) => {
        const dateTimeString = `${showDate}T${time}`;
        showsToCreate.push({
          movie: movieId,
          showDateTime: new Date(dateTimeString),
          showPrice,
          occupiedSeats: {},
        });
      });
    });
    if (showsToCreate.length > 0) {
      await Show.insertMany(showsToCreate); // it add all the shows in db
    }

    res.json({ success: true, message: "Show Added Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


//3. API to get all shows from the database.
export const getShows = async (req,res) =>{
  try{
    const shows = await Show.find({showDateTime : {$gte: new Date()}}).populate('movie').sort({showDateTime : 1});
    //gte = greater than

    //filter unique shows
    const uniqueShows = new Set(shows.map(show => show.movie));

    res.json({success: true , show : Array.from(uniqueShows)});

  }catch(err){
    console.log(err);
    res.json({success: false , message : err.message});
  }
}

//4. API to get single show from the database
export const getShow = async (req,res) => {
  try{
    const {movieId} = req.params;
    //get all upcoming shows for the movie
    const shows = await Show.find({movie : movieId , showDateTime : {$gte : new Date()}});
    const movie = await Movie.findById(movieId);
    const dateTime = {};

    shows.forEach((show)=> {
      const date = show.showDateTime.toISOString().split("T")[0];
      if(!dateTime[date]){
        dateTime[date] = []
      }
      dateTime[date].push({time : show.showDateTime , showId : show._id});
    })
    res.json({success: true , movie , dateTime});
  }catch(err){
   console.log(err);
    res.json({success: false , message : err.message});
  }
}