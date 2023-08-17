import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Header from './HomePageComponent';

const apiKey = process.env.REACT_APP_KEY_NAME;

const DetailsPage = () => {
  	const { movieId } = useParams();
  	const [movieDetails, setMovieDetails] = useState({});

	useEffect(() => {
		const fetchMovieDetails = async () => {
		try {
			const response = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
			);
			const data = await response.json();
			setMovieDetails(data);
		} catch (error) {
			console.error('Error fetching movie details:', error);
		}
		};
		fetchMovieDetails();
  	}, [movieId]);

	return (
		<div>
		<Header showSearch={false} showHome={true}/>
		<h2>{movieDetails.original_title}</h2>
		<p>Rating: {movieDetails.vote_average}</p>
		<p>Year of Release: {movieDetails.release_date}</p>
		<p>length</p>
		<p>Director</p>
		<p>Cast</p>
		<p>Description</p>
		<Link to="/" className='back-to-list'><FontAwesomeIcon icon={faArrowLeft} size="2x" /></Link>
		</div>
	);
};

export default DetailsPage;
