import React, {useState} from 'react';
import axios from 'axios';

const FilmSearch = props => {
  const [data,setData]= useState("");
  const [filmTitle, setFilmTitle] = useState("");
  const updateTitle = (e) => {
      e.preventDefault(); 
      setFilmTitle(e.target.value);
  }

  const makeRequest =(e) => {
      axios.get(props.apiKey +"&type=movie" + "&t=" + filmTitle)
      .then(response => {
          console.log(response.data);
          setData(response.data);
      });
  };

  return (
  <>
      <div>
      <p>Enter the name of the film you are searching for</p>
      <input type="text" onChange={(e)=>updateTitle(e)} />
      <button onClick={(e) => makeRequest(e)}>Search</button>

      <h4>{data.Title} - {data.Year} - {data.Rated}</h4>
      <h4>{data.Genre}</h4>
      <h4>{data.Plot}</h4>
      <img src={data.Poster} alt="Movie Poster"></img>
      </div>
  </>
  );
}

export default FilmSearch; 