import {useEffect, useState} from "react";

import {moviesService} from "../../services";

const MovieDetails = ({movie}) => {
    const [id, setId] = useState(null)

    useEffect(() => {
        if (id) {
            moviesService.getDetailsById(id.then(({data}) => setId({...data})))}

    }, [id])

    const {title, release_date, vote_average, poster_path}=movie
    return (
        <div>
            {/*movie && movie.map(movie =><MovieDetails movie={movie}/>*/}
                <div>
                    hello
                    title:{title}
                </div>
                <div>release_date:{release_date}</div>
                <div>vote_average:{vote_average}</div>
                <div>
                <img src={"https://image.tmdb.org/t/p/w300" + poster_path} alt={title}/>
                </div>/>
                )}

        </div>
    );

};

export {MovieDetails};
