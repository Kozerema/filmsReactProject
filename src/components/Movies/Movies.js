import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import * as React from "react";

import {moviesActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import './Movies.css';


const Movies = () => {

    const {movies, errors} = useSelector(state => state.movies)
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'})

    useEffect(() => {
        if (movies) {
            dispatch(moviesActions.getAll({page: query.get('page')}))
        } else if (!movies) {
            return errors.JSON.stringify(errors.data)
        }
    }, [dispatch, query])


    return (
        <div className={'movies-wrapper'}>
            <div className={'movies-list'}>
                <h2>Movies</h2>

                <button className={'button-list'}
                        onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev
                </button>
                <button className={'button-list'}
                        onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next
                </button>

                <div className={'movies-container'}>
                    {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
                </div>

            </div>
        </div>
    );
};

export {Movies};
