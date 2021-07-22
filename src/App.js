import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useState,useEffect } from 'react';
import React from 'react';
import './App.css';
import {FetchImage,SearchedImage} from './Components/Api';
import AlbumImage from './Components/AlbumImage';

function App() {
  const [query,setQuery] = useState()
  const [Searchvalue,setSearch] = useState()
  const data= FetchImage()

  const Search=()=>{
    setSearch(query)
  }
 const searchData = SearchedImage(Searchvalue)
 console.log(searchData)
  return (
    <div className="App"> 
      <div className="image-section">
        <input type="text" onChange={(event) =>setQuery(event.target.value)}/>
        <button className="btn btn-success image-btn" onClick={Search}>Get Album Photos By Id</button>
      </div>
      <div className="section">
        <div className="container">
        {Searchvalue ? searchData.map((imag,key) => (
          <AlbumImage  src={imag.thumbnailUrl} key={key} title={imag.title} />
        )   ):
        data.map((imag,key) => (
          <AlbumImage  src={imag.thumbnailUrl} key={key} title={imag.title} />
        )   )}
        </div>
      </div>
    </div>);
}

export default App;
