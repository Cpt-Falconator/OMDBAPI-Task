import './App.css'
import FilmSearch from './Components/FilmSearch.jsx'
import TvSearch from './Components/TvSearch.jsx'
import Search from './Components/Search.jsx'

let apiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=7bfd1e08"
// Add routing to go to a 'Shows' page and a 'Movies' page, with both searches on them.
// Or (as mentioned in TvSearch.jsx) add a dropdown to select which search to perform.
function App() {
  return (
<>

<h2>MyMDB</h2>
  <Search apiKey={apiKey}/>

  <FilmSearch apiKey={apiKey}/>

  <TvSearch apiKey={apiKey}/>
</>

  /*<>
  <DateSearch apiKey="http://www.omdbapi.com/?i=tt3896198&apikey=7bfd1e08"/>
  </>*/
  );
}

export default App;
