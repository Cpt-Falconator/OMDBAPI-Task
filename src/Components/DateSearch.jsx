import React, {useState} from 'react';
import axios from 'axios';

//Doesn't work, the API requires a movie title in order to search, making the date search pointless

const DateSearch = props => {
  const [data, setData]= useState([]);
  const [filmDate, setFilmDate] = useState("");
  const updateDate = (e) => {
      e.preventDefault(); 
      setFilmDate(e.target.value);
  }

  const makeRequest =(e) => {
      axios.get(props.apiKey + "&y=" + filmDate)
      .then(response => {
          console.log(response.data);
          setData(response.data.data);
      });
  };

  return (
  <>
      <div>
      <h2>DateSearch.js</h2>
      <p>Enter the year of films you're looking for</p>
      <input type="text" onChange={(e)=>updateDate(e)} />
      <button onClick={(e) => makeRequest(e)}>Search</button>

      <ul>
        {data.map((item) => (
        <li key={item.id}>
            {item.title}
        </li>
        ))}
    </ul>
    </div>
  </>
  );
}

export default DateSearch; 