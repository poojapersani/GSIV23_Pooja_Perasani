import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Header from './HeaderComponent';

const apiKey = process.env.REACT_APP_KEY_NAME;
const imageApi = "https://image.tmdb.org/t/p/w500/";

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
			<Header showSearch={false} showHome={true} showDetails={true}/>
			<div className='details-page'>
			<div className="card-details" >
				<img
					src={imageApi + movieDetails.backdrop_path}
					className="poster-images"
					alt="posterimages"
				/>
			</div>
			<div className='other-details'>
				<h2>{movieDetails.original_title} <span className='rate'>({movieDetails.vote_average})</span> </h2>
				<span>{movieDetails.release_date}</span> | <span>Length</span> | <span>Director</span>
				<p>Cast</p>
				<p className='desc'>Description: {movieDetails.overview}</p>
				
			</div>
			<Link to="/" className='back-to-list'><FontAwesomeIcon icon={faArrowLeft} size="2x" /></Link>
			</div>
		</div>
	);
};

export default DetailsPage;
