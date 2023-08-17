import React, { useState, useEffect } from 'react';
import MovieCardRender from './MovieCardRender'
import MovieListPage from './MovieListPage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons';

const apiKey = process.env.REACT_APP_KEY_NAME;
// const imageApi = "https://image.tmdb.org/t/p/w500/";


const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`
        );
        const data = await response.json();
        setSearchResults(data.results);
      } catch (error) {
        console.log('Unable to fetch search results:', error);
      }
    };
    fetchSearchResults();
  }, [searchQuery]);

  return (
    <>
		<div className="header">
			<div className="search-bar">
				<FontAwesomeIcon icon={faSearch} className="search-button" />
				<input
					type="text"
					placeholder="Search"
					value={searchQuery}
					onChange={(event) => setSearchQuery(event.target.value)}
				/>
			</div>
			<div className="home">     
				<FontAwesomeIcon icon={faHome} size="2x" />
			</div>
		</div>
        <MovieCardRender movies={searchResults.length > 0 ? searchResults : []} />
        <MovieListPage movies={''} />
    </>
  );
};

export default Header;
