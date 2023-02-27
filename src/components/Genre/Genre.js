import {useNavigate} from "react-router-dom";

const Genre = ({genre}) => {

    const {id, name} = genre
    const navigate = useNavigate();

    return (

        <div className={'genresAll'}>
            <b className={'fa-fa-name'}
               onClick={() => navigate(id.toString())}>{name}
            </b>
        </div>

    );
};

export {Genre};
