const Movie = ({movies}) => {

    const {title}=movies;

    return (
        <div>
            <div>
                title:{title}
            </div>
        </div>
    );
};

export {Movie};
