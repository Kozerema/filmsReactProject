import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {moviesActions} from "../../redux";
import {Movie} from "../Movie/Movie";

const Movies = () => {

    const {movie}=useSelector(state => state.movie)
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(moviesActions.getAll)
    },[dispatch])
    console.log(movie)

    return (
        <div>
            {movie && movie.map(movie=><Movie key={movie.id} movie={movie}/>)}
            <div>hello</div>
        </div>
    );
};

export {Movies};
