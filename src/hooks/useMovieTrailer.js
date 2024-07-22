import { useEffect } from "react";
import { addMovieTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";

const useMovieTrailer=(movieId)=>{
    //fetching traier of video and push it to our store
    const dispatch=useDispatch()
 const getMovieVideos=async()=>{
   const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);


   const json=await data.json();
 
   const filterData=json.results.filter((video)=>video.type==="Trailer");
   const trailer=filterData.length?filterData[0]:json.results[0];
   dispatch(addMovieTrailer(trailer));
 }

 useEffect(()=>{
    getMovieVideos();
 },[])
}

export default useMovieTrailer;