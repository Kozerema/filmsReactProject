import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {genreService} from "../../services";
import {Genre} from "../Genre/Genre";

const Genres = () => {

    // const {genres} = useSelector(state => state.genres)
    const dispatch = useDispatch();
    const [genre, setGenre] = useState([])


    useEffect(() => {
       genreService.getAll()
           .then(({data}) => console.log(data))





    }, [dispatch])


    return (
        <div> {genre && genre.map(genreOne=><Genre key={genreOne.id} genreone={genreOne}/>)}


            {/*{genre && <>*/}
            {/*    {genre.id}---{genre.name}*/}
            {/*</>}*/}
        </div>
    );
};

export {Genres};
