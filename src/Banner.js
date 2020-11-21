import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import './Banner.css';


function Banner() {
    const [movie, setMovie] = useState([]);
    const [readMore, setReadMore] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    // if description is too long only show n number of characters with ...
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "" : str;
    }

    return (

        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="title">{movie?.title || movie?.name || movie?.original_name}</h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {readMore ? truncate(movie?.overview, 150) : truncate(movie?.overview, movie?.overview.length - 1)}

                    <button className="btnRead" onClick={() => setReadMore(!readMore)}>{readMore ? '...' : 'show less'}</button>

                </h1>
            </div>
            <div className="bannner--fadeBottom"></div>
        </header>
    )
}

export default Banner;
