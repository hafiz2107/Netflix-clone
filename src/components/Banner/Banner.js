import React, { useEffect, useState } from 'react'
import { API_KEY , imageUrl} from '../../Constants/Constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
    const [movie, setMovie] = useState([])
    console.log("The api key : ", API_KEY)
    useEffect(() => {
        // Fetching the API 
        // Result :  Get All the details of the movie
        axios.get(`trending/movie/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            // Setting the details of the movies onto a state
            
            setMovie(response.data.results[Math.floor( Math.random() * 19 ) + 0])
        }).catch((err) => {
            console.log("the error is : ", err)
        })
    }, [])

    return (
        <div>
            <div className='banner'
            style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
            >
                <div className='content'>
                    <span className='title'>{movie ? movie.title : ""}</span>
                    <div className='banner-buttons'>
                        <button className='button'>Play</button>
                        <button className='button'>My List</button>
                    </div>
                    <div className='description'>
                        <span className='description-body'>{movie ? movie.overview : " "}</span>
                    </div>
                </div>
                <div className="fade"></div>
            </div>
        </div>
    )
}

export default Banner
