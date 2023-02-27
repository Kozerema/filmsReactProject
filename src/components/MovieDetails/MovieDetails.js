import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as React from "react";

import {moviesService} from "../../services";
import './MovieDetails.css';
import {Genre} from "../Genre/Genre";


const MovieDetails = () => {

    const {id} = useParams();
    const [movie, setMovie] = useState('');

    useEffect(() => {

        if (id) {
            moviesService.getDetailsById(id)
                .then(({data}) => setMovie({...data}))

        }

    }, [id])

    const {genres: genresAll} = movie

    return (<div className={"detail-section"}>
        {movie && <>
            <div className={'section-left'}>
                <div className={'detail-title'}>{movie.title}</div>
                <div className={'detail-rating'}>

                    <span>Popularity<i className="fa fa-star"></i>:{" "}{movie.popularity}</span>
                    <span>Votes<i className="fa fa-thumbs-up"></i>:{" "}{movie.vote_average}</span>

                    <span>
                Year <i className="fa fa-calendar"></i> : {movie.release_date}
              </span>

                    <div>
                        <h4> Genres: <div className="e-badge e-badge-primary e-badge-pill green font size_1">New</div>
                        </h4>
                        <span><i className="fa fa-star"></i>{" "}{genresAll && genresAll.map(genre => <Genre
                            key={genre.id} genre={genre}/>)}</span>

                    </div>

                </div>
                <div className="detail-info">
                    <div>

                        <h4>Description <div
                            className="e-badge e-badge-primary e-badge-pill green font size_1">Info</div></h4>
                        <span>{movie.overview}</span>
                    </div>
                </div>
            </div>

            <div>
                <div className="section-right">
                    <img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt={movie.title}/>

                </div>
            </div>
        </>}
    </div>);
};

export {MovieDetails};
