import {  Routes, Route } from 'react-router-dom'
// import SearchComponent from './SearchComponent'
import MovieListPage from './MovieListPage';
import MovieDetailsPage from './MovieDetailsPage';
import Header from './HeaderComponent';
const App = () => {
  return (
      <Routes>
        <Route path="/" element={<CombinedPage />} />
        <Route path="/details/:movieId" element={<MovieDetailsPage />} />
      </Routes>
  );
};

const CombinedPage = () => {
  return (
    <>
      <Header showHome={true} showSearch={true} showDetails={false}/>
      <MovieListPage />
    </>
  );
};

export default App; 