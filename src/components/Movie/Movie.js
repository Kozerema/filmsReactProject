import {useNavigate} from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

import './Movie.css';


const Movie = ({movie}) => {

    const {title, release_date, vote_average, poster_path, id} = movie;

    const navigate = useNavigate();

    return (
        <div className={"movie-item"}>
            <div className={"movie-inner"}>

                <div className={'movie-top'}>
                    <img src={"https://image.tmdb.org/t/p/w300" + poster_path} alt={title}
                         onClick={() => navigate(id.toString())}/>
                </div>


                <div className={'movie-bottom'}>
                    <div className={'movie-info'}>

                        <h4>{title}</h4>
                        <p>Realise date: {release_date}</p>

                        <Box sx={{"& > legend": {mt: 2},}}>
                            <div >Rating: </div>
                            <Rating name="read-only" value={vote_average} max={10} readOnly/>

                        </Box>
                    </div>
                </div>


            </div>

        </div>
    );
};

export {Movie};
