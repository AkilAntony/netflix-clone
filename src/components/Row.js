import React,{useState,useEffect,useRef} from 'react';
import ReactDOM from "react-dom";
import axios from '../axios';
import requests from '../request';
import './row.css';
import YouTube from 'react-youtube';
 
const baseUrl="https://image.tmdb.org/t/p/original/";  //Poster URL


function Row({title,fetchUrl,isLargePoster}) {
    const [movies,setMovies]=useState([]);
    const [videoPlayer,setVideoPlayer]=useState(true);
    const[movieTrailerUrl,setMovieTrailerUrl]=useState();
    useEffect(()=>{
        async function fetchMovies(){
            const request=await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        };
        fetchMovies();
    },[fetchUrl]);
    // console.log(movies);
    //getting trailers
    const opts={
        width:"100%",
        height:"390"
    }
    async function getVideos(movieID){
        console.log(movieID)
        setVideoPlayer(!videoPlayer);
        const videoUrl=`/movie/${movieID}${requests.getMoiveTrailers}`
        // console.log(videoUrl)
        const videoRequest=await axios.get(videoUrl);
        setMovieTrailerUrl(videoRequest.data.results[0].key)
        // console.log(movieTrailers)
    //     console.log(videoRequest.data.results[0].key)
    //    if(movieTrailerUrl){
    //     setMovieTrailerUrl('');
    //    }
    //    else{
    //     movieTrailerUrl(movieID.name || "").then((url))=>{

    //     }
    //    }
       
     }
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="moviePosterContainer">
                {movies.map(movie=>(
                    <img key={movie.id}
                    src={`${baseUrl}${isLargePoster? movie.poster_path :movie.backdrop_path}`}
                    alt={movie.name} className={`moviePoster ${isLargePoster && 'largeMoviePoster'}`}
                    onClick={()=>getVideos(movie.id)}/>
                ))}
            </div>
            
           {/* {setVideoPlayer ? <iframe
             width="853"
             height="480"
             src={`https://www.youtube.com/embed/${movieTrailers}`}
             frameBorder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             allowFullScreen
             title="Embedded youtube"
            /> :null} */}
            {movieTrailerUrl &&<YouTube videoId={movieTrailerUrl} opts={opts}/>}
        

        </div>
    ) 
}

export default Row;

//https://api.themoviedb.org/3/trending/all/week?api_key=5d05fd6f862a7cfda47f25595b544fad&language=en-US