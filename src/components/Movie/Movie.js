import {useNavigate} from "react-router-dom";

const Movie = ({movie}) => {

    const {title,release_date, vote_average,poster_path, id}=movie;


    const navigate = useNavigate();
    return (
        <div>
            <div>
                title:{title}
            </div>
            <div>release_date:{release_date}</div>
            <div>vote_average:{vote_average}</div>
            <div>
                <img src={"https://image.tmdb.org/t/p/w300" + poster_path} alt={title} onClick={() => navigate(id.toString())}/>
            </div>


        </div>
    );
};

export {Movie};
