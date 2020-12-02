import React from 'react'

const Search = props => {
    const [title, setTitle] = useState("");

    const updateTitle = (e) => {
        e.preventDefault(); 
        setTitle(e.target.value);
    }

    const makeRequest = (e, c) => {
        axios.get(props.apiKey +"&type=movie" + "&t=" + filmTitle)
        .then(response => {
            console.log(response.data);
            setData(response.data);
        });

    <div>
      <p>Search for a movie or TV show</p>
      <input type="text" onChange={(e)=>updateTitle(e)} />
      <select name="searchType" id="id_searchType">
        <option value="&type=movie" selected>Film</option>
        <option value="&type=series">TV Show</option>
      </select>
      <button onClick={
          (e, c = document.getElementById("id_searchType").value) => makeRequest(
              e,
              c = document.getElementById("id_searchType").value)}>
                  Search
                  </button>
    </div>
}

export default Search