import React, {useState, useEffect} from 'react';
import List from '../List/List';
import axios from 'axios';


const BACKEND_URL = 'http://localhost:8000'

const AnimeList = () => {

    const [anime , setAnime] = useState([]);

    useEffect(() => {
        (async() =>{
            const res = await axios.get(`${BACKEND_URL}/anime`);
            setAnime(res.data.payload);
        })()
    },[]);
    

    return (
        <div>
                 <List elements={anime}/>
            
        </div>
    )
}

export default AnimeList