import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import { moviesActions} from "../../redux";
import {Genre} from "../Genre/Genre";

const Genres = () => {

    const {genres} = useSelector(state => state.genres)
    const dispatch = useDispatch();

    console.log(genres);
    useEffect(() => {
        dispatch(moviesActions.getAllGenres())

    }, [dispatch])
    console.log(genres);

    return (
        <div>
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};
