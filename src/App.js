import {  Routes, Route } from 'react-router-dom'
import HomePageComponent from './HomePageComponent'
import MovieListPage from './MovieListPage';
import MovieCardDetailsPage from './MovieCardDetailsPage';
const App = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePageComponent/>}/>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/details/:movieId" element={<MovieCardDetailsPage />} />
      </Routes>
  );
};
export default App;