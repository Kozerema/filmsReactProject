import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {genreService} from "../../services";

const GenreDetails = () => {

    const {id} = useParams();
    const [genre, setGenre] = useState([]);

    useEffect(() => {

        if (id) {
            genreService.getGenreById(id)
                .then(({data}) => setGenre({...data}))

        }

    }, [id])
    console.log(genre)

    return (
        <div>

        </div>
    );
};

export {GenreDetails};
