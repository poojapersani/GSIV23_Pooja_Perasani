import React,{useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import MovieCardRender from './MovieCardRender';

/** please use your own api key by adding it to .env file */
const apiKey = process.env.REACT_APP_KEY_NAME;

    const Header = ({showHome, showSearch, showDetails}) => {
      const [searchQuery, setSearchQuery] = useState('');
      const [searchResults, setSearchResults] = useState([]);
      /** Everytime user inputs search query this effect helps to fetch the results */
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
                {showSearch && <div className="search-bar">
                    <FontAwesomeIcon icon={faSearch} className="search-button" />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />
                </div>}
                {showDetails && <div className='details'>Movie Details</div>}
                {showHome && <div className="home">     
                    <a href='/'><FontAwesomeIcon icon={faHome} size="2x" color='black'/></a>
                </div>}
            </div>
            <MovieCardRender movies={searchResults} /> 
        </>
      );
    };
export default Header;
