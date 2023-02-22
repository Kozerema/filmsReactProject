import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {moviesActions} from "../../redux";
import {Movie} from "../Movie/Movie";
import {MovieDetails} from "../MovieDetails/MovieDetails";


const Movies = () => {

    const {movies} = useSelector(state => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll())

    }, [dispatch])






    return (
        <div>
            {movies && movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            {movies && movies.map(movie => <MovieDetails key={movie.id} movie={movie}/>)}



        </div>
    );
};

export {Movies};
