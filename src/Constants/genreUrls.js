import { API_KEY } from "./Constants";

// import axios from '../axios';

// axios.get('genre/movie/list?api_key=${API_KEY}&language=en-US').then((response)=>{
    
// })

const urls = [
 {title :"Netflix Originals" ,url : `discover/tv?api_key=${API_KEY}&with_networks=213`},
 {title :"Action" ,url : `discover/movie?api_key=${API_KEY}&with_genres=28`},
 {title :"Romance" ,url : `discover/movie?api_key=${API_KEY}&with_genres=10749`},
 {title :"Animation" ,url : `discover/movie?api_key=${API_KEY}&with_genres=16`},
 {title :"Comedy" ,url : `discover/movie?api_key=${API_KEY}&with_genres=35`},
 {title :"Crime" ,url : `discover/movie?api_key=${API_KEY}&with_genres=80`},
 {title :"Documentry" ,url : `discover/movie?api_key=${API_KEY}&with_genres=99`},
 {title :"Drama" ,url : `discover/movie?api_key=${API_KEY}&with_genres=18`},
 {title :"Family" ,url : `discover/movie?api_key=${API_KEY}&with_genres=10751`},
 {title :"Fantasy" ,url : `discover/movie?api_key=${API_KEY}&with_genres=14`},
 {title :"History" ,url : `discover/movie?api_key=${API_KEY}&with_genres=36`},
 {title :"Horror" ,url : `discover/movie?api_key=${API_KEY}&with_genres=27`},
 {title :"Mystery" ,url : `discover/movie?api_key=${API_KEY}&with_genres=9648`},
 {title :"Sci-Fi" ,url : `discover/movie?api_key=${API_KEY}&with_genres=878`},
 {title :"Thriller" ,url : `discover/movie?api_key=${API_KEY}&with_genres=53`},
 {title :"War" ,url : `discover/movie?api_key=${API_KEY}&with_genres=10752`},
 {title :"Western" ,url : `discover/movie?api_key=${API_KEY}&with_genres=37`},
]

export default urls