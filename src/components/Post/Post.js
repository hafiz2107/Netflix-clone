import React , {useEffect , useState} from 'react'
import './Post.css'
import axios from '../../axios'
import {imageUrl} from '../../Constants/Constants'


function Post({urls , title ,isSmall}) {
    const [poster , setPoster] = useState([])

    useEffect(()=>{
        axios.get(urls).then((response)=>{
            setPoster(response.data.results)
        })
    },[])
    

    return (
        <div className='row'>
            <h2 className='title'>{title}</h2>
            <div className='posters'>
                {
                    poster.map((eachPoster,index)=>
                        <img className={`${isSmall ? 'smallPoster' : 'poster'}`} key={index} src={`${imageUrl+eachPoster.backdrop_path}`} alt="Poster" />
                    )
                }
            </div>
        </div>
    )
}

export default Post
