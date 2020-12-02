import React, {useState} from 'react';
import axios from 'axios';

const TvSearch = props => {
  const [data,setData]= useState("");
  const [showTitle, setShowTitle] = useState("");
  const updateTitle = (e) => {
      e.preventDefault(); 
      setShowTitle(e.target.value);
  }

  const makeRequest = () => {
      axios.get(props.apiKey +"&type=series" + "&t=" + showTitle)
      .then(response => {
          console.log(response.data);
          setData(response.data);
      });
  };

  //Can seperate this into another search component with a dropdown for TV or Series.
  return (
  <>
      <div>
      <p>Enter the name of the show you are searching for</p>
      <input type="text" onChange={(e)=>updateTitle(e)} />
      <button onClick={(e) => makeRequest(e)}>Search</button>

      <h4>{data.Title} - {data.Year} - {data.Rated}</h4>
      <h4>{data.Genre}</h4>
      <h4>{data.Plot}</h4>
      <img src={data.Poster} alt="Series Poster"></img>
      </div>
  </>
  );
}

export default TvSearch; 