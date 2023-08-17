import React, { useState, useEffect } from 'react';
import MovieCardRender from './MovieCardRender';
// import HeaderComponent from './HeaderComponent'

const apiKey = process.env.REACT_APP_KEY_NAME;

/** list page to display all movie cards fetched from Api based on the release date */
const MovieListPage = () => {
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [filteredMovies, setFilteredMovies] = useState([]);
	/** this effect is to fetch and filter all the upcoming movies everytime the page gets updated */
	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await fetch(
				`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${page}`
				);
				const data = await response.json();
				/** sorting the upcoming movies based on the release date */
				const upcomingMovies = data.results.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
				setFilteredMovies((prevMovies) => [...prevMovies, ...upcomingMovies]);
				setTotalPages(data.total_pages);
			} catch (error) {
				console.error('Error fetching movies:', error);
			}
		};
   		fetchMovies();
  	}, [page]);

	/** scroll function to set the page that we are in and scroll effect to call the scroll function evertime the page gets updated */
	const handleScroll = () => {
		if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && page < totalPages) {
			setPage((prevPage) => prevPage + 1);
		}
	};
  
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [page, totalPages]);
	/** rendering the card list based on filteredmovie list*/
	return (
		<>
		  <MovieCardRender movies={filteredMovies} />
		</>
	  );
	  
};
export default MovieListPage;