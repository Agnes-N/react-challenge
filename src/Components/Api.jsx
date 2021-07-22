import { useState,useEffect } from 'react';
import axios from 'axios';

const count=1;
function FetchImage(){
    const [state,setState] = useState([])
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then((data) => {
            setState(data.data)
        })
        
    },[count])
    return state;
}
function SearchedImage(query){
    const [state,setState] = useState([])
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/albums/"+query+"/photos")
        .then((data) => {
            setState(data.data)
        })
        
    },[query])
    return state;
}

export {FetchImage,SearchedImage}
