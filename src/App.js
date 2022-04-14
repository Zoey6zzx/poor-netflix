import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap';

import MovieList from './components/movie-list/MovieList';

function App() {
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
