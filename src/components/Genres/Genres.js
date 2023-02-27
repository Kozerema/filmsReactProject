import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";

import {genreService} from "../../services";
import {Genre} from "../Genre/Genre";
import './Genres.css';

const Genres = () => {

    const dispatch = useDispatch();
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        if (genres) {
            genreService.getAll()
                .then(({data}) => setGenres({...data}))

        }
    }, [dispatch])

    const {genres: genresAll} = genres

    return (
        <div className={'genres-container'}>

            <div className={'fa-fa-name'}>
                <h2 className={'title'}>All Genres</h2>
                {genresAll && genresAll.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};

export {Genres};